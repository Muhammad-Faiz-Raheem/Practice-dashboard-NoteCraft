import { Box, Drawer as MuiDrawer, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import BottomMenu from "./sidebarComponents/BottomMenu";
import OpenClose from "./sidebarComponents/OpenClose";
import Profile from "./sidebarComponents/Profile";
import TopMenu from "./sidebarComponents/TopMenu";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  position: "fixed",
  zIndex: 2,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

function Sidebar({ open, onDrawerToggle }) {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          borderRight: "none",
          backgroundColor: "common.white",
        },
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <Stack height="100%" justifyContent="space-between">
        <Box>
          <Profile />

          <TopMenu />

          <OpenClose open={open} onDrawerToggle={onDrawerToggle} />
        </Box>

        <BottomMenu />
      </Stack>
    </Drawer>
  );
}

export default Sidebar;
