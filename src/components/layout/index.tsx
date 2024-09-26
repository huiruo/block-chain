'use client';

import { Box, createTheme } from "@mui/system";
import { ReactNode, useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";

interface Props {
  children: ReactNode;
}

declare module '@mui/system' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: true;
    lg: false;
    xl: true;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      md: 900,
      desktop: 1200,
      xl: 1500
    },
  },
});


export const Layout = ({ children }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  // Set up window resize listener to determine if we're in mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < theme.breakpoints.values.tablet);
    };

    // Call the function immediately to set the initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log('%c=isMobile', 'color:red', isMobile);

  return <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
    width: '100%',
  }}>
    {/* <DrawerProvider>
      <Nav isMobile={isMobile} />
    </DrawerProvider> */}

    <Box sx={{
      display: 'flex',
      flexGrow: '1',
      flexShrink: '1',
      flexBasis: '0',
      height: '100%',
      width: '100%',
    }}>
      {!isMobile && <Sidebar isMobile={isMobile} />}

      <Box
        sx={{
          flexGrow: '1',
          flexShrink: '1',
          flexBasis: '0',
          overflow: 'auto',
          pl: '20px',
        }}>
        {children}
      </Box>
    </Box>
  </Box>
}