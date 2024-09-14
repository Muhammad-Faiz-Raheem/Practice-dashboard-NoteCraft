import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MdChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  MdChatBubbleOutline,
  MdInsertChartOutlined,
  MdNotes,
  MdOutlineDateRange,
  MdOutlineSettingsInputComponent,
} from "react-icons/md";
import { useState } from "react";

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

function TopMenu() {
  const [isActiveLink, setIsActiveLink] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
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
                        ? "white"
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
  );
}

export default TopMenu;
