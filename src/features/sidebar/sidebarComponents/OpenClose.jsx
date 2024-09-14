import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { RiTriangleLine } from "react-icons/ri";

function OpenClose({ open, onDrawerToggle }) {
  return (
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
  );
}

export default OpenClose;
