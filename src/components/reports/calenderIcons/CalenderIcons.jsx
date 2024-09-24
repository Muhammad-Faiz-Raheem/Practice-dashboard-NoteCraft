import { Box, Stack } from "@mui/material";
import Calender from "./Calender";
import Icons from "./Icons";

function CalenderIcons({ isMdUp, isSmUp, isXSmUp }) {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent={isSmUp ? "space-between" : "center"}
        spacing={2}
        alignItems="center"
        flexWrap="wrap"
      >
        <Box>
          <Calender isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
        </Box>
        <Box order={isSmUp ? "" : "-1"}>
          <Icons />
        </Box>
      </Stack>
    </Box>
  );
}

export default CalenderIcons;
