import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';
import logoIcon from '@/assets/logo-icon.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative">
        {/* Logo Icon with pulse animation */}
        <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
          <div className="relative">
            <img
              src={logoIcon}
              alt="Oussaid Tourism"
              className="h-24 w-24 animate-pulse"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
          </div>
        </div>

        {/* Full Logo with fade in */}
        <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
          <img
            src={logo}
            alt="Oussaid Tourism"
            className="h-32 w-auto relative z-10"
          />
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-8 animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
