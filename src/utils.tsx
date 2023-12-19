import { useState, useEffect } from 'react';

function useBreakpoint(breakpoint: number) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= breakpoint);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [breakpoint]);

  return isMobile;
}

export default useBreakpoint;
