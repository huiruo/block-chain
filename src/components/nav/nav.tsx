'use client';

import { Box } from "@mui/system";
import { Menu } from "lucide-react";
import { Sidebar } from "../sidebar";
import { useDrawerContext } from "../drawer/drawerContext";
import { Drawer } from "../drawer";

export const Nav = ({ isMobile }: { isMobile: boolean }) => {
  const { toggleDrawer } = useDrawerContext();

  return (
    <nav className="nav">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {isMobile && (
          <Box
            onClick={() => toggleDrawer("NavDrawer")}
            component={Menu}
            size={22}
            color={"#000"}
            sx={{
              cursor: "pointer",
              mr: "10px",
            }}
          />
        )}

        <Box
          component={"img"}
          alt="icon"
          src="/logo.svg"
          width={40}
          sx={{
            borderRadius: "50%",
          }}
        />
      </Box>

      {/* 其他导航内容 */}

      <Drawer anchor={"left"} id="NavDrawer" width={220}>
        {isMobile && <Sidebar isMobile={isMobile} />}
      </Drawer>
    </nav>
  );
};
