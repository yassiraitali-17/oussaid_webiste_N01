import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Check, ArrowRight } from 'lucide-react';
import { getServiceById } from '@/data/services';
import ImageGallery from '@/components/ImageGallery';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = getServiceById(id || '');

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

  // Create an array of images (placeholder + multiple copies for demo)
  const serviceImages = [
    service.image,
    service.image,
    service.image,
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
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

        {/* Image Gallery */}
        <ImageGallery images={serviceImages} title={service.title} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Experience</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
            </div>

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

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-elegant">
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">From</div>
                <div className="text-4xl font-bold text-primary">{service.price}</div>
                <div className="text-sm text-muted-foreground">per person</div>
              </div>

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
      </div>
    </div>
  );
};

export default ServiceDetail;
