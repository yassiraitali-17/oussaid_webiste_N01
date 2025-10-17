import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ServiceCard from '@/components/ServiceCard';
import CategoryCard from '@/components/CategoryCard';
import { getServicesByCategory } from '@/data/services';
import agafayHero from '@/assets/agafay-hero.jpg';
import palmeraieHero from '@/assets/palmeraie-hero.jpg';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const activities = getServicesByCategory('activity');
  const tours = getServicesByCategory('tour');
  const transportation = getServicesByCategory('transportation');
  const allServices = [...activities, ...tours, ...transportation];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of activities, tours, and transportation services in Marrakech and beyond
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="tours">Tours</TabsTrigger>
                <TabsTrigger value="transportation">Transportation</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activities" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <CategoryCard 
                  title="Agafay"
                  subtitle="Agafay Desert Adventures — Quad, Camel rides, Dinner show"
                  image={agafayHero}
                  link="/activities/agafay"
                />
                <CategoryCard 
                  title="Palmeraie"
                  subtitle="Palmeraie Oasis — Quad biking, Hot air balloon, Palm grove tours"
                  image={palmeraieHero}
                  link="/activities/palmeraie"
                />
              </div>
            </TabsContent>

            <TabsContent value="tours" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transportation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {transportation.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Services;
