import { styled } from "@mui/material/styles";
import { useState } from "react";
import { AiFillMoon } from "react-icons/ai";
import { LuArrowLeftToLine } from "react-icons/lu";
import {
  MdChatBubbleOutline,
  MdChevronRight,
  MdInsertChartOutlined,
  MdNotes,
  MdOutlineDateRange,
  MdOutlineDescription,
  MdOutlineNotificationImportant,
  MdOutlineSettingsInputComponent,
} from "react-icons/md";
import { RiTriangleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  Stack,
} from "@mui/material";

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

const menuItems = [
  {
    icon: <MdNotes />,
    name: "Main board",
    id: Math.random(),
    route: "dashboard",
  },
  {
    icon: <MdOutlineSettingsInputComponent />,
    name: "Analytics",
    id: Math.random(),
    route: "analytics",
  },
  {
    icon: <MdInsertChartOutlined />,
    name: "Reports",
    id: Math.random(),
    route: "reports",
  },
  {
    icon: <MdOutlineDateRange />,
    name: "Calender",
    id: Math.random(),
    route: "calender",
  },
  {
    icon: <MdChatBubbleOutline />,
    name: "Chats",
    id: Math.random(),
    route: "chats",
  },
];

const bottomItems = [
  { icon: <AiFillMoon />, id: Math.random() },
  { icon: <LuArrowLeftToLine />, id: Math.random() },
];

function Sidebar({ open, onDrawerToggle }) {
  const [isActiveLink, setIsActiveLink] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          borderRight: "none",
        },
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <Stack height="100%" justifyContent="space-between">
        <Box>
          <List sx={{ margin: "-6px 0 0 -6px" }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      fontSize: "12px",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <Avatar
                    src="https://randomuser.me/api/portraits/men/79.jpg"
                    alt="Jane Doe"
                    sx={{ border: "1px solid", height: "35px", width: "35px" }}
                  />
                </ListItemIcon>

                <Stack spacing={-1 / 8} ml={2}>
                  <ListItemText
                    primary={"Jhon Smith"}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "12px",
                        fontWeight: 500,
                        fontFamily: '"Nunito", sans-serif',
                      },
                    }}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    color="grey.A6f"
                  >
                    <ListItemText
                      primary={
                        <Badge
                          variant="dot"
                          color="warning"
                          sx={{
                            "& .MuiBadge-dot": {
                              top: "4px",
                              right: "4px",
                              height: "6px ",
                              minWidth: "6px",
                            },
                          }}
                        >
                          <MdOutlineNotificationImportant
                            style={{ fontSize: "16px" }}
                          />
                        </Badge>
                      }
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                    <ListItemText
                      primary={
                        <Badge
                          variant="dot"
                          color="warning"
                          sx={{
                            "& .MuiBadge-dot": {
                              top: "2px",
                              right: "2px",
                              height: "6px ",
                              minWidth: "6px",
                            },
                          }}
                        >
                          <MdChatBubbleOutline style={{ fontSize: "16px" }} />
                        </Badge>
                      }
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                    <ListItemText
                      primary={
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <MdOutlineDescription style={{ fontSize: "16px" }} />
                        </Box>
                      }
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                  </Stack>
                </Stack>
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            {menuItems.map((item, index) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <NavLink
                  to={item.route}
                  style={{ textDecoration: "none", color: "inherit" }}
                  className={({ isActive }) => {
                    if (isActive) {
                      setIsActiveLink(true);
                      setActiveIndex(index);
                    }
                    return isActive ? "active-link" : "";
                  }}
                >
                  <ListItemButton
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? {
                            justifyContent: "space-between",
                          }
                        : {
                            justifyContent: "center",
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          padding: "5px",
                          borderRadius: "7px",
                          color:
                            isActiveLink && index === activeIndex
                              ? "common.white"
                              : "grey.A6f",
                          backgroundColor:
                            isActiveLink && index === activeIndex
                              ? "warning.main"
                              : "",
                        },
                        open
                          ? {
                              mr: 3,
                            }
                          : {
                              mr: "auto",
                            },
                      ]}
                    >
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "10px",
                          fontFamily: '"Nunito", sans-serif',
                          marginLeft: "20px",
                          color:
                            isActiveLink && index === activeIndex
                              ? "common.black"
                              : "grey.A6fToggle",
                          fontWeight:
                            isActiveLink && index === activeIndex ? 800 : 500,
                        },
                      }}
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />

                    <MdChevronRight style={{ color: "#6f6f76" }} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem disablePadding>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
                onClick={onDrawerToggle}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      padding: "5px",
                      fontSize: "12px",
                      color: "A6f",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {open ? (
                    <RiTriangleLine
                      style={{
                        transform: "rotate(-90deg)",
                      }}
                    />
                  ) : (
                    <RiTriangleLine style={{ transform: "rotate(90deg)" }} />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <List>
          {bottomItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{ display: "block", marginTop: "-10px" }}
            >
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      fontSize: "16px",
                      padding: "5px",
                      color: "grey.A6f",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Drawer>
  );
}

export default Sidebar;
