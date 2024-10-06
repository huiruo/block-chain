'use client';

import { createTheme } from "@mui/system";
import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { DrawerProvider } from "../drawer/drawerContext";
import { Nav } from "./Nav";

interface Props {
  // children: ReactNode;
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

export const Layout = () => {
  const [isMobileResize, setIsMobileResize] = useState<0 | 1 | 2>(0);

  const isMobile = isMobileResize === 1 ? true : false

  useEffect(() => {
    const handleResize = () => {
      setIsMobileResize(window.innerWidth < theme.breakpoints.values.tablet ? 1 : 2);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  if (isMobileResize === 0) {
    return null
  }

  return <>
    <DrawerProvider>
      <Nav isMobile={isMobile} />
    </DrawerProvider>
    {!isMobile && <Sidebar isMobile={isMobile} />}
  </>
}