import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useColorScheme,
} from "@mui/material";
import { AiFillMoon, AiFillSun } from "react-icons/ai";
import { LuArrowLeftToLine } from "react-icons/lu";

function BottomMenu() {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <List>
      <ListItem disablePadding sx={{ display: "block", marginTop: "-10px" }}>
        <ListItemButton
          onClick={toggleTheme}
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
            {mode === "light" ? <AiFillMoon /> : <AiFillSun />}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block", marginTop: "-10px" }}>
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
            <LuArrowLeftToLine />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default BottomMenu;
