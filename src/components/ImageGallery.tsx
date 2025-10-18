import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaThumbRef] = useEmblaCarousel({ 
    containScroll: 'keepSnaps',
    dragFree: true 
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
    scrollTo(index);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="relative rounded-2xl overflow-hidden shadow-elegant mb-4">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0 h-[60vh] cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); scrollNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div ref={emblaThumbRef} className="overflow-hidden mb-8">
          <div className="flex gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`relative flex-[0_0_20%] min-w-[100px] h-20 rounded-lg overflow-hidden transition-all ${
                  selectedIndex === index 
                    ? 'border-l-4 border-primary scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <div ref={emblaRef} className="overflow-hidden w-full h-full">
            <div className="flex h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-4"
                >
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
