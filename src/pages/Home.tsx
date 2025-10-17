import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { getFeaturedServices, getServicesByCategory } from '@/data/services';
import heroImage from '@/assets/hero-marrakech.jpg';

const Home = () => {
  const featuredServices = getFeaturedServices();
  const activities = getServicesByCategory('activity').slice(0, 3);
  const tours = getServicesByCategory('tour').slice(0, 3);
  const transportation = getServicesByCategory('transportation').slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Marrakech Morocco"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Discover the Magic of Marrakech
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md">
            Authentic tours, exciting activities, and reliable transportation with Oussaid Tourism
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/activities">
              <Button variant="hero" size="lg">
                View Activities
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to Oussaid Tourism</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based in the heart of Marrakech, we specialize in creating unforgettable experiences 
              that showcase the beauty, culture, and adventure of Morocco. With years of expertise 
              and a passion for hospitality, we're your trusted partner for exploring this magical destination.
            </p>
            <Link to="/about">
              <Button variant="secondary" size="lg">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Exciting Activities</h2>
              <p className="text-muted-foreground">Thrilling adventures in the Moroccan landscape</p>
            </div>
            <Link to="/activities">
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <ServiceCard key={activity.id} service={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Guided Tours</h2>
              <p className="text-muted-foreground">Explore Morocco's most beautiful destinations</p>
            </div>
            <Link to="/tours">
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <ServiceCard key={tour.id} service={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Transportation Services</h2>
              <p className="text-muted-foreground">Comfortable and reliable travel solutions</p>
            </div>
            <Link to="/transportation">
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportation.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="flex justify-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => window.open('https://google.com', '_blank')}
            >
              <Star className="w-5 h-5 fill-current" />
              Read Our Reviews on Google
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
