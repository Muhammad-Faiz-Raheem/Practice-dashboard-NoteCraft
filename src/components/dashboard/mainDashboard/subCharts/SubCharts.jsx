import { Box, Stack } from "@mui/material";
import Leads from "./Leads";
import TopManagersTasks from "./TopManagersTasks";
import TopTrafficChannels from "./TopTrafficChannels";

function SubCharts({ isMdUp, isSmUp, isXSmUp }) {
  return (
    <Stack
      direction="row"
      rowGap={1}
      width="100%"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Box
        minWidth={isMdUp ? "330px" : ""}
        width={isSmUp ? (isMdUp ? "39%" : "60%") : "100%"}
      >
        <TopTrafficChannels isXSmUp={isXSmUp} />
      </Box>
      <Box
        sx={{
          minWidth: isMdUp ? "330px" : "",
          width: isMdUp ? "39%" : "100%",
          order: isMdUp ? "" : -1,
        }}
      >
        <TopManagersTasks isXSmUp={isXSmUp} />
      </Box>
      <Box minWidth={175} width={isSmUp ? (isMdUp ? "18%" : "38%") : "100%"}>
        <Leads />
      </Box>
    </Stack>
  );
}

export default SubCharts;
