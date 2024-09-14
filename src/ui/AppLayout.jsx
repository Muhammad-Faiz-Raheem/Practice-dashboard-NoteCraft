import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../features/sidebar/Sidebar";

export default function AppLayout() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((open) => !open);
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100svh",
        width: "100%",
        scrollbarWidth: "none",
        backgroundColor: "primary.main",
      }}
      onClick={() => setOpen(false)}
    >
      <CssBaseline />

      <Sidebar open={open} onDrawerToggle={handleDrawerToggle} />

      <Outlet />
    </Box>
  );
}
