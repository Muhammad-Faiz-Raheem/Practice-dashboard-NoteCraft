import { Box, Stack } from "@mui/material";
import Calender from "./Calender";
import Icons from "./Icons";

function CalenderIcons({ isMdUp, isSmUp, isXSmUp }) {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        alignItems="center"
      >
        <Box>
          <Calender isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
        </Box>
        <Box>
          <Icons />
        </Box>
      </Stack>
    </Box>
  );
}

export default CalenderIcons;
