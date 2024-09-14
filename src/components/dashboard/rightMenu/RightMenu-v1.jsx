import { ExpandMore, MoreHoriz, Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BiImages } from "react-icons/bi";
import {
  MdChatBubbleOutline,
  MdOutlineAssignment,
  MdOutlineBookmarks,
  MdOutlineDescription,
} from "react-icons/md";

const topMenu = [
  {
    id: Math.random(),
    icon: <MdOutlineBookmarks />,
  },
  {
    id: Math.random(),
    icon: <MdOutlineAssignment />,
  },
  {
    id: Math.random(),
    icon: <MdChatBubbleOutline />,
  },
  {
    id: Math.random(),
    icon: <MdOutlineDescription />,
  },
];

const chats = [
  { id: Math.random(), chat: "#development team" },
  { id: Math.random(), chat: "#sale team" },
  { id: Math.random(), chat: "#marketing team" },
  { id: Math.random(), chat: "#party friday" },
  { id: Math.random(), chat: "#development team" },
  { id: Math.random(), chat: "#sale team" },
  { id: Math.random(), chat: "#marketing team" },
  { id: Math.random(), chat: "#party friday" },
  { id: Math.random(), chat: "#development team" },
  { id: Math.random(), chat: "#sale team" },
];

const getRandomAvatar = (gender) => {
  const randomNum = Math.floor(Math.random() * 100); // Random number between 0 and 99
  return `https://randomuser.me/api/portraits/${gender}/${randomNum}.jpg`;
};

const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};

const contacts = [
  {
    id: Math.random(),
    name: "Jane Doe",
    avatar: getRandomAvatar("women"),
    online: true,
    lastMessage: "Let's catch up tomorrow!",
    lastSeen: getRandomTime(),
    image: true,
    description: false,
  },
  {
    id: Math.random(),
    name: "John Smith",
    avatar: getRandomAvatar("men"),
    online: false,
    lastMessage: "Meeting at 3 PM.",
    lastSeen: getRandomTime(),
    image: false,
    description: true,
  },
  {
    id: Math.random(),
    name: "Alice Johnson",
    avatar: getRandomAvatar("women"),
    online: true,
    lastMessage: "See you later.",
    lastSeen: getRandomTime(),
    image: true,
    description: true,
  },
  {
    id: Math.random(),
    name: "Michael Brown",
    avatar: getRandomAvatar("men"),
    online: false,
    lastMessage: "Got the email?",
    lastSeen: getRandomTime(),
    image: false,
    description: false,
  },
  {
    id: Math.random(),
    name: "Emily Davis",
    avatar: getRandomAvatar("women"),
    online: false,
    lastMessage: "I'll send the files soon.",
    lastSeen: getRandomTime(),
    image: true,
    description: true,
  },
  {
    id: Math.random(),
    name: "Chris Wilson",
    avatar: getRandomAvatar("men"),
    online: true,
    lastMessage: "Thanks!",
    lastSeen: getRandomTime(),
    image: true,
    description: false,
  },
  {
    id: Math.random(),
    name: "Sophia Martinez",
    avatar: getRandomAvatar("women"),
    online: true,
    lastMessage: "Let me know the updates.",
    lastSeen: getRandomTime(),
    image: false,
    description: true,
  },
  {
    id: Math.random(),
    name: "James Anderson",
    avatar: getRandomAvatar("men"),
    online: false,
    lastMessage: "I'll be late.",
    lastSeen: getRandomTime(),
    image: true,
    description: false,
  },
  {
    id: Math.random(),
    name: "Olivia Taylor",
    avatar: getRandomAvatar("women"),
    online: false,
    lastMessage: "Let's reschedule.",
    lastSeen: getRandomTime(),
    image: false,
    description: true,
  },
  {
    id: Math.random(),
    name: "William Thomas",
    avatar: getRandomAvatar("men"),
    online: true,
    lastMessage: "Got it!",
    lastSeen: getRandomTime(),
    image: true,
    description: true,
  },
  {
    id: Math.random(),
    name: "Isabella Jackson",
    avatar: getRandomAvatar("women"),
    online: true,
    lastMessage: "Talk soon.",
    lastSeen: getRandomTime(),
    image: true,
    description: false,
  },
  {
    id: Math.random(),
    name: "Daniel White",
    avatar: getRandomAvatar("men"),
    online: false,
    lastMessage: "On my way.",
    lastSeen: getRandomTime(),
    image: false,
    description: true,
  },
  {
    id: Math.random(),
    name: "Charlotte Harris",
    avatar: getRandomAvatar("women"),
    online: false,
    lastMessage: "I'll be there shortly.",
    lastSeen: getRandomTime(),
    image: true,
    description: false,
  },
  {
    id: Math.random(),
    name: "Henry Lewis",
    avatar: getRandomAvatar("men"),
    online: true,
    lastMessage: "Can we move the meeting?",
    lastSeen: getRandomTime(),
    image: false,
    description: true,
  },
  {
    id: Math.random(),
    name: "Mia Clark",
    avatar: getRandomAvatar("women"),
    online: true,
    lastMessage: "Thanks for the update.",
    lastSeen: getRandomTime(),
    image: true,
    description: false,
  },
  {
    id: Math.random(),
    name: "Ethan King",
    avatar: getRandomAvatar("men"),
    online: false,
    lastMessage: "See you soon.",
    lastSeen: getRandomTime(),
    image: false,
    description: true,
  },
  {
    id: Math.random(),
    name: "Amelia Hill",
    avatar: getRandomAvatar("women"),
    online: false,
    lastMessage: "Sure, no problem.",
    lastSeen: getRandomTime(),
    image: true,
    description: true,
  },
  {
    id: Math.random(),
    name: "Lucas Scott",
    avatar: getRandomAvatar("men"),
    online: true,
    lastMessage: "Catch you later.",
    lastSeen: getRandomTime(),
    image: false,
    description: false,
  },
];

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

function RightMenu() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMoreChats, setShowMoreChats] = useState(false);
  const [showMoreContacts, setShowMoreContacts] = useState(false);

  return (
    <Stack width="100%" height="100%">
      <Box>
        <Stack
          direction="row"
          padding="15px"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          {topMenu.map((item, index) => (
            <Box
              key={item.id}
              onClick={() => setActiveIndex(index)}
              sx={{
                display: "flex",
                fontSize: "18px",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "10px",
                color: activeIndex === index ? "common.white" : "grey.A6f",
                backgroundColor: activeIndex === index ? "warning.main" : "",
              }}
            >
              {item.icon}
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider />

      <Box padding="15px 15px 15px 0">
        <Box>
          <TextField
            type="search"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Type something"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                height: "28px",
                "& fieldset": {
                  borderColor: "grey.A6f",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid",
                  borderColor: "grey.A6f",
                },
              },
              "& .MuiInputBase-input": {
                fontSize: "12px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search
                    sx={{
                      fontSize: "18px",
                      marginLeft: "-6px",
                      color: "grey.A6f",
                    }}
                  />
                </InputAdornment>
              ),
              inputProps: {
                sx: {
                  "&::placeholder": {
                    fontSize: "12px",
                    color: "grey.A6f",
                    opacity: "0.8",
                  },
                },
              },
            }}
          />
        </Box>
      </Box>

      <Box padding="0 15px 15px 0">
        <Stack>
          <Typography
            sx={{ fontWeight: "700", fontSize: "14px", marginBottom: "10px" }}
          >
            Chats
          </Typography>

          <Box onClick={() => setShowMoreChats(false)}>
            {chats.slice(0, showMoreChats ? chats.length : 4).map((chat) => (
              <Typography
                key={chat.id}
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "16px",
                }}
              >
                {chat.chat}
              </Typography>
            ))}
          </Box>
          {!showMoreChats && (
            <Box
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                color: "grey.A6f",
                marginTop: "-2px",
                marginLeft: "-3px",
                cursor: "pointer",
              }}
              onClick={() => setShowMoreChats(true)}
            >
              <MoreHoriz />
            </Box>
          )}
        </Stack>
      </Box>

      <Box padding="0 15px 15px 0">
        <Stack>
          <Typography
            sx={{ fontWeight: "700", fontSize: "14px", marginBottom: "10px" }}
          >
            Contacts
          </Typography>

          <Stack direction="row" flexWrap="wrap">
            {contacts
              .slice(0, showMoreContacts ? contacts.length : 11)
              .map((contact) => (
                <Box
                  key={contact.id}
                  padding="0 9px 9px 0"
                  onClick={() => setShowMoreContacts(false)}
                >
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
              ))}

            {!showMoreContacts && (
              <Box
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "grey.A6f",
                  marginTop: "6px",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setShowMoreContacts(true)}
              >
                <MoreHoriz />
              </Box>
            )}
          </Stack>
        </Stack>
      </Box>

      <Box
        padding="0 15px 15px 0"
        sx={{
          flexGrow: 1,
          display: "flex",
          minHeight: "250px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            flexGrow: 1,
            borderRadius: "15px",
          }}
        >
          <Stack height="100%">
            <Box>
              <Stack
                direction="row"
                padding="10px"
                justifyContent="space-between"
              >
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

            <Divider />

            <Box width="100%" overflow="auto">
              {contacts.slice(0, 10).map((contact) => (
                <Stack
                  key={contact.id}
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
                        borderColor: contact.online
                          ? "success.main"
                          : "grey.A6f",
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
                                fontSize: "14px",
                                marginBottom: "10px",
                              }}
                            >
                              {contact.name}
                            </Typography>
                          </Box>
                          <Box>
                            <Stack direction="row" spacing={1}>
                              <Box>
                                <BiImages />
                              </Box>
                              <Box>
                                <MdOutlineDescription />
                              </Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: "400",
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  {contact.lastSeen}
                                </Typography>
                              </Box>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "16px",
                          }}
                        >
                          {contact.lastMessage}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}

export default RightMenu;
