import { Box, Divider, Stack } from "@mui/material";
import Chats from "./Chats";
import Chattings from "./Chattings";
import Contacts from "./Contacts";
import Searchbar from "./Searchbar";
import TopMenu from "./TopMenu";
import { getRandomAvatar, getRandomTime } from "../../../utils/helper";

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

function RightMenu({ isMdUp }) {
  return (
    <Stack width="100%" height="100%">
      <Box>
        <TopMenu />
      </Box>

      <Divider />

      <Box padding="15px 15px 15px 0">
        <Searchbar />
      </Box>

      <Box padding="0 15px 15px 0">
        <Chats />
      </Box>

      <Box padding="0 15px 15px 0">
        <Contacts contacts={contacts} />
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
        <Chattings contacts={contacts} isMdUp={isMdUp} />
      </Box>
    </Stack>
  );
}

export default RightMenu;
