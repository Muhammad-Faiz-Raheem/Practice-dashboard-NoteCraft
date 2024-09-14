import { ExpandMore } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { BiImages } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";

const filterData = ["All", "Groups", "Unread", "Online"];

function CustomArrow(props) {
  return (
    <SvgIcon
      {...props}
      sx={{
        fontSize: 18, // Reduced icon size
      }}
    >
      <ExpandMore sx={{ color: "grey.A6f" }} />
    </SvgIcon>
  );
}

function Chattings({ contacts, isMdUp }) {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        flexGrow: 1,
        borderRadius: "15px",
      }}
    >
      <Stack height="100%">
        <Box>
          <Stack direction="row" padding="10px" justifyContent="space-between">
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "12px",
              }}
            >
              Chatting
            </Typography>

            <FormControl sx={{ minWidth: 70 }} size="small">
              <Select
                id="demo-select-small"
                // value={selectedFilter}
                // onChange={(e) => handleChange(e.target.value)}
                IconComponent={CustomArrow}
                defaultValue={filterData.at(0)}
                sx={{
                  margin: 0,
                  height: "22px",
                  border: "none",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-select": {
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "15.39px",
                  },
                }}
              >
                {filterData.map((data) => (
                  <MenuItem
                    value={data}
                    key={data}
                    sx={{
                      fontSize: "10px",
                      padding: "2px 8px",
                    }}
                  >
                    {data}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Divider sx={{ color: "grey.A6f", opacity: "0.6" }} />

        <Box
          width="100%"
          overflow="auto"
          sx={{ scrollbarWidth: isMdUp ? "" : "none" }}
        >
          {contacts.map((contact) => (
            <Box key={contact.id}>
              <Stack
                direction="row"
                width="100%"
                spacing={1}
                padding="10px"
                alignItems="center"
              >
                <Box>
                  <Avatar
                    key={contact.id}
                    src={contact.avatar}
                    alt={contact.name}
                    sx={{
                      height: "35px",
                      width: "35px",
                      border: "2px solid",
                      borderColor: contact.online ? "success.main" : "grey.A6f",
                    }}
                  />
                </Box>

                <Box flexGrow={1}>
                  <Stack>
                    <Box>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: "700",
                              fontSize: "13px",
                              marginBottom: "10px",
                              color: "common.black",
                            }}
                          >
                            {contact.name}
                          </Typography>
                        </Box>
                        <Box>
                          <Stack direction="row" spacing={1}>
                            <Typography
                              sx={{ color: "grey.A6f", fontSize: "12px" }}
                            >
                              <BiImages />
                            </Typography>
                            <Typography
                              sx={{ color: "grey.A6f", fontSize: "12px" }}
                            >
                              <MdOutlineDescription />
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontSize: "12px",
                                marginBottom: "10px",
                                color: "common.black",
                              }}
                            >
                              {contact.lastSeen}
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: "common.black",
                        }}
                      >
                        {contact.lastMessage}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Stack>

              <Divider sx={{ color: "grey.A6f", opacity: "0.6" }} />
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

export default Chattings;
