import { useEffect, useState } from 'react';

type CheckDeviceScreenReturn = {
  isMobile: () => boolean;
  isTablet: () => boolean;
  isDesktop: () => boolean;
}

const useCheckDeviceScreen = ( ): CheckDeviceScreenReturn => {
  const [ width, setWidth ] = useState( window.innerWidth );

  const handleWindowSizeChange = () => {
    setWidth( window.innerWidth );
  };

  const isMobile = () => width < 768;
  const isDesktop = () => width > 1023;
  const isTablet = () => !isDesktop() && !isMobile();

  useEffect( () => {
    window.addEventListener( 'resize', handleWindowSizeChange );
    return () => {
      window.removeEventListener( 'resize', handleWindowSizeChange );
    };
  }, [width] );


  return { isMobile, isTablet, isDesktop };
};

export default useCheckDeviceScreen;
