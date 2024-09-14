import { MoreHoriz } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

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

function Chats() {
  const [showMoreChats, setShowMoreChats] = useState(false);

  return (
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
              fontSize: "13px",
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
  );
}

export default Chats;
