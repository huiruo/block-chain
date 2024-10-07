'use client';

import { Box, styled } from "@mui/system";
import { useEffect, useState } from "react";
import Link from 'next/link'
import { parentRoute } from '@/common/router';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

interface StyledBoxProps {
  isActive: boolean;
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<StyledBoxProps>(({ isActive }) => ({
  color: isActive ? 'blue' : 'black',
}));

export const Sidebar = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openParent, setOpenParent] = useState<string | null>(null);

  const pathname = usePathname();

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleParent = (path: string) => {
    setOpenParent(openParent === path ? null : path);
  };

  const SIDEBAR_WIDTH = isMobile ? '100%' : isOpen ? '10%' : '0px';

  const getParentRoute = (path: string): string => {
    const match = path.match(/^\/[^/]+/);
    return match ? match[0] : "";
  }

  useEffect(() => {
    const parentRoute = getParentRoute(pathname)
    if (parentRoute) {
      setOpenParent(parentRoute)
    }
  }, [pathname]);

  return (
    <Box
      component='nav'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: SIDEBAR_WIDTH,
        minWidth: isOpen ? '190px' : SIDEBAR_WIDTH,
        transition: 'width 0.3s',
        background: '#f1f2f6',
        paddingTop: {
          mobile: '20px',
          tablet: '0px',
          desktop: '0px',
        },
        paddingBottom: {
          mobile: '100px',
        },
        boxSizing: 'border-box',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      {!isMobile && (
        <>
          <Box sx={{ mt: '50px' }} />
          <Box
            sx={{ position: 'absolute', zIndex: 1, left: '2px', bottom: '0px', cursor: 'pointer' }}
            onClick={handleToggleSidebar}
          >
            {isOpen ? <ChevronLeft color="#FFF" /> : <ChevronRight color="#FFF" />}
          </Box>
        </>
      )}

      {isOpen && (
        <>
          {parentRoute.length &&
            parentRoute.map((parent) => (
              <Box key={parent.path}>
                {parent.children ? (
                  <StyledBox
                    onClick={() => handleToggleParent(parent.path)}
                    sx={{ cursor: 'pointer', padding: '6px 0 0 16px' }}
                    isActive={false}
                  >
                    {parent.label}
                  </StyledBox>
                ) : (
                  <Link
                    key={parent.path}
                    href={parent.path}
                    className={`navLink navLink-c ${parent.path === pathname ? 'navLink-ac' : null}`}
                  >
                    {parent.label}
                  </Link>
                )}

                {openParent === parent.path &&
                  parent.children?.map((child) => (
                    <Link key={child.path} 
                      className={`navLink navLink-r ${`${parent.path}${child.path}` === pathname ? 'navLink-ac' : null}`}
                      href={parent.path + child.path}
                    >
                      {child.label}
                    </Link>
                  ))}
              </Box>
            ))}
        </>
      )}
    </Box>
  );
};