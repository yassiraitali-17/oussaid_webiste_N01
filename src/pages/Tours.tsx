import ServiceCard from '@/components/ServiceCard';
import { getServicesByCategory } from '@/data/services';

const Tours = () => {
  const tours = getServicesByCategory('tour');

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Guided Tours</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore Morocco's most beautiful destinations with our expert guides and carefully curated tours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <ServiceCard key={tour.id} service={tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
