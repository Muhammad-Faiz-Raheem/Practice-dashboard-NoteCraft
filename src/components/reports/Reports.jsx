import { Box, Stack } from "@mui/material";
import CalenderIcons from "./calenderIcons/CalenderIcons";
import ChartIndicator from "./dashboardChart/ChartIndicator";
import ReportsIcons from "./reportsIcons/ReportsIcons";
import ChannelsTable from "./channelsTable/ChannelsTable";

function Reports({ isMdUp, isSmUp, isXSmUp }) {
  return (
    <Box padding="5px 15px 15px 15px" overflow="auto" height="100svh">
      <Stack spacing={1}>
        <Box>
          <CalenderIcons isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
        </Box>

        <Box>
          <ChartIndicator />
        </Box>

        <Box>
          <ReportsIcons />
        </Box>

        <Box>
          <ChannelsTable isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
        </Box>
      </Stack>
    </Box>
  );
}

export default Reports;
