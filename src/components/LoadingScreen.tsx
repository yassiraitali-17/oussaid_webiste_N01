import { useEffect, useState } from 'react';
import logoIcon from '@/assets/logo-icon.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [stage, setStage] = useState<'icon' | 'wordmark' | 'complete'>('icon');

  useEffect(() => {
    // Icon build and settle: 0-1200ms
    const wordmarkTimer = setTimeout(() => setStage('wordmark'), 1200);
    
    // Complete animation and exit: at 3000ms
    const completeTimer = setTimeout(() => {
      setStage('complete');
      setTimeout(onLoadingComplete, 500);
    }, 3000);

    return () => {
      clearTimeout(wordmarkTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        stage === 'complete' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(180deg, hsl(0 0% 100%), hsl(28 10% 98%))'
      }}
    >
      <div 
        className={`relative flex flex-col items-center transition-transform duration-500 ${
          stage === 'complete' ? '-translate-y-6' : 'translate-y-0'
        }`}
      >
        {/* Icon - Geometric build with settle */}
        <div 
          className="relative w-24 h-24 mb-6"
          style={{
            animation: stage !== 'icon' ? 'icon-settle 600ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms forwards' : 'none'
          }}
        >
          <img
            src={logoIcon}
            alt="OUSSAID Icon"
            className="w-full h-full object-contain"
            style={{
              animation: 'line-build 900ms cubic-bezier(0.33, 1, 0.68, 1) 0ms forwards',
              filter: 'drop-shadow(0 0 0 transparent)'
            }}
          />
        </div>

        {/* Wordmark - OUSSAID */}
        {stage !== 'icon' && (
          <div
            className="text-5xl font-bold tracking-tight"
            style={{
              color: 'hsl(28 76% 56%)',
              animation: 'wordmark-rise 500ms cubic-bezier(0.33, 1, 0.68, 1) 0ms forwards',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'uppercase'
            }}
          >
            OUSSAID
          </div>
        )}

        {/* Subtitle - TOURISME */}
        {stage !== 'icon' && (
          <div
            className="text-sm font-medium tracking-widest mt-1"
            style={{
              color: 'hsl(182 54% 42%)',
              animation: 'subtitle-fade 300ms cubic-bezier(0.4, 0.0, 0.2, 1) 120ms forwards',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'uppercase',
              opacity: 0
            }}
          >
            TOURISME
          </div>
        )}

        {/* Lockup container for final snap */}
        {stage === 'complete' && (
          <div
            className="absolute inset-0"
            style={{
              animation: 'lockup-snap 180ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms forwards'
            }}
          />
        )}
      </div>

      {/* Reduced motion fallback */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
