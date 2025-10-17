import ServiceCard from '@/components/ServiceCard';
import { getServicesByCategory } from '@/data/services';

const Activities = () => {
  const activities = getServicesByCategory('activity');

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Exciting Activities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover thrilling adventures and unique experiences in the stunning landscapes of Marrakech and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ServiceCard key={activity.id} service={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
