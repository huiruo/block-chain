'use client';

import { Box, styled } from "@mui/system";
import { useState } from "react";
import Link from 'next/link'
import { parentRoute } from '@/common/router';
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleParent = (path: string) => {
    setOpenParent(openParent === path ? null : path);
  };

  const SIDEBAR_WIDTH = isMobile ? '100%' : isOpen ? '10%' : '0px';

  return (
    <Box
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
          <BlankBox />
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
                  <Link key={parent.path} className="navLink navLink-c" href={parent.path}>
                    {parent.label}
                  </Link>
                )}

                {openParent === parent.path &&
                  parent.children?.map((child) => (
                    <Link key={child.path} className="navLink navLink-r" href={parent.path + '/' + child.path}>
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

const BlankBox = () => {
  return <Box sx={{ mt: '50px' }} />;
};