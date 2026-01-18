'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Loading Bar on Page Transition */}
      {isTransitioning && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 z-50 animate-pulse">
          <div className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></div>
        </div>
      )}

      {/* Page Content with Fade Animation */}
      <div 
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-75' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}
