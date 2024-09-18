import { Box, Stack } from "@mui/material";
import Leads from "./Leads";
import TopManagersTasks from "./TopManagersTasks";
import TopTrafficChannels from "./TopTrafficChannels";

function SubCharts({ isMdUp, isSmUp, isXSmUp }) {
  return (
    <Stack
      direction="row"
      rowGap={1}
      columnGap={1}
      width="100%"
      flexWrap="wrap"
    >
      <Box width={isSmUp ? "400px" : "100%"}>
        <TopTrafficChannels />
      </Box>
      <Box sx={{ width: isMdUp ? "400px" : "100%", order: isMdUp ? "" : -1 }}>
        <TopManagersTasks isXSmUp={isXSmUp} />
      </Box>
      <Box width={isSmUp ? "212.2px" : "100%"}>
        <Leads />
      </Box>
    </Stack>
  );
}

export default SubCharts;
