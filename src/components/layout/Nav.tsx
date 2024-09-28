'use client';

import { Box } from "@mui/system";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { useDrawerContext } from "../drawer/drawerContext";
import { Drawer } from "../drawer";

export const Nav = ({ isMobile }: { isMobile: boolean }) => {
  const { toggleDrawer } = useDrawerContext();

  return (
    <Box
      component={"nav"}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        background: "#e4e8ec",
        padding: "0 20px",
        zIndex: 1000,
      }}
    >
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
    </Box>
  );
};
