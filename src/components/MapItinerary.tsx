import { MapPin } from 'lucide-react';

interface MapItineraryProps {
  location: string;
  title: string;
}

const MapItinerary = ({ location, title }: MapItineraryProps) => {
  return (
    <div className="w-full h-[400px] bg-muted rounded-2xl overflow-hidden relative">
      <iframe
        title={`Map for ${title}`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=-8.0089%2C31.6295%2C-7.9689%2C31.6695&layer=mapnik&marker=31.6295,-7.9889`}
        allowFullScreen
      />
      <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-border">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-semibold text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default MapItinerary;
