import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Check, ArrowRight, ArrowLeft, Users } from 'lucide-react';
import { getServiceById } from '@/data/services';
import MapItinerary from '@/components/MapItinerary';
import ImageGallery from '@/components/ImageGallery';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = getServiceById(id || '');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const calculateTotal = () => {
    if (!service?.priceVariants) return null;
    let total = 0;
    service.priceVariants.forEach((variant, index) => {
      const qty = quantities[index] || 0;
      total += variant.priceNumeric * qty;
    });
    return total;
  };

  const handleQuantityChange = (index: number, value: string) => {
    const qty = parseInt(value) || 0;
    setQuantities(prev => ({ ...prev, [index]: qty }));
  };

  if (!service) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{service.location}</span>
            </div>
          </div>
        </div>

        {/* Top Section: Image + Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <ImageGallery 
              images={service.gallery || [service.image]} 
              title={service.title}
            />
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant sticky top-24">
              {service.priceVariants ? (
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-4">Pricing Options</div>
                  <div className="space-y-4 mb-6">
                    {service.priceVariants.map((variant, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-semibold">{variant.label}</div>
                            <div className="text-lg font-bold text-primary">{variant.price}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`qty-${index}`} className="text-sm">Number of persons</Label>
                          <div className="relative">
                            <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                              id={`qty-${index}`}
                              type="number"
                              min="0"
                              value={quantities[index] || 0}
                              onChange={(e) => handleQuantityChange(index, e.target.value)}
                              className="pl-9"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {calculateTotal() !== null && calculateTotal()! > 0 && (
                    <div className="bg-primary/10 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="text-2xl font-bold text-primary">€{calculateTotal()}</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">From</div>
                  <div className="text-4xl font-bold text-primary">{service.price}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>
              )}

              <Link to={`/checkout/${service.id}`} className="block mb-4">
                <Button className="w-full" size="lg">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-semibold">{service.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-semibold capitalize">{service.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">About This Experience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
          </div>

          {/* Map Itinerary - Hide for rentals */}
          {!service.isRental && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Location & Itinerary</h2>
              <div className="max-w-4xl">
                <MapItinerary location={service.location} title={service.title} />
              </div>
            </div>
          )}

          <div>
            <h2 className="text-3xl font-bold mb-4">What's Included</h2>
            <ul className="space-y-3">
              {service.inclusions.map((inclusion, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
