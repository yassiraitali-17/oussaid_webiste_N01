import { useState } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'activity' | 'tour' | 'transportation'>('all');

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our complete range of activities, tours, and transportation services
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setActiveFilter('all')}
          >
            All Services
          </Button>
          <Button
            variant={activeFilter === 'activity' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setActiveFilter('activity')}
          >
            Activities
          </Button>
          <Button
            variant={activeFilter === 'tour' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setActiveFilter('tour')}
          >
            Tours
          </Button>
          <Button
            variant={activeFilter === 'transportation' ? 'default' : 'outline'}
            size="lg"
            onClick={() => setActiveFilter('transportation')}
          >
            Transportation
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No services found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
