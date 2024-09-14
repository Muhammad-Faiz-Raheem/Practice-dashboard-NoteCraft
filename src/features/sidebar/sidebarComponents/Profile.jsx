import { getRandomAvatar } from "../../../utils/helper";
import {
  MdChatBubbleOutline,
  MdOutlineDescription,
  MdOutlineNotificationImportant,
} from "react-icons/md";
import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

function Profile() {
  return (
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
              src={getRandomAvatar("men")}
              alt="Jane Doe"
              sx={{
                border: "2px solid",
                borderColor: "success.main",
                height: "35px",
                width: "35px",
              }}
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
                  color: "common.black",
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
  );
}

export default Profile;
