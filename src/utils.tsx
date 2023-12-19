import { useState, useEffect } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop' | 'extralargeDesktop';

type Breakpoints = {
  [key in Breakpoint]: {
    min: number;
    max?: number;
  };
};

function useBreakpoint(breakpoint1: Breakpoint, breakpoint2?: Breakpoint ) {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoints: Breakpoints = {
    mobile: {
        min: 0,
        max: 480
    },
    tablet: {
        min: 481,
        max: 768
    },
    desktop: {
        min: 769,
        max: 1024
    },
    largeDesktop: {
        min: 1025,
        max: 1200
    },
    extralargeDesktop: {
        min: 1201
    }
  }

  const handleResize = () => {
    if(breakpoint2){
        setIsMobile(window.innerWidth >= breakpoints[breakpoint1].min && window.innerWidth < breakpoints[breakpoint2].min )
    }else{
        setIsMobile(window.innerWidth <= breakpoints[breakpoint1].max)
    }
};


  useEffect(() => {
    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [breakpoint1, breakpoint2]);

  return isMobile;
}

export default useBreakpoint;
