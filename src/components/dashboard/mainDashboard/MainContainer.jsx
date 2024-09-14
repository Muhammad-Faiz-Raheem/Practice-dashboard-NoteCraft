import { Box, Stack } from "@mui/material";
import TodaysTasks from "./todaysTasks/TodaysTasks";
import Filters from "./filters/Filters";
import DashboardChart from "./dashboardChart/DashboardChart";
import SubCharts from "./subCharts/SubCharts";

function MainContainer({ isMdUp, isSmUp, isXSmUp }) {
  return (
    <Box padding="15px">
      <Stack spacing={1}>
        <Box sx={{ backgroundColor: "common.white", borderRadius: "15px" }}>
          <TodaysTasks />
        </Box>

        <Box>
          <Filters isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
        </Box>

        <Box sx={{ backgroundColor: "common.white", borderRadius: "15px" }}>
          <DashboardChart isMdUp={isMdUp} isSmUp={isSmUp} />
        </Box>

        <Box>
          <SubCharts isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
        </Box>
      </Stack>
    </Box>
  );
}

export default MainContainer;
