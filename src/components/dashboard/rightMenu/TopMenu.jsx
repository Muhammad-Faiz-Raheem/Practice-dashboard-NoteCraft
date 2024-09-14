import { Box, Stack } from "@mui/material";
import { useState } from "react";
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

function TopMenu() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
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
            color: activeIndex === index ? "white" : "grey.A6f",
            backgroundColor: activeIndex === index ? "warning.main" : "",
          }}
        >
          {item.icon}
        </Box>
      ))}
    </Stack>
  );
}

export default TopMenu;
