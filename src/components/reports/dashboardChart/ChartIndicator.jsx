import { Box, Stack } from "@mui/material";
import Chart from "./Chart";
import Indicators from "./Indicators";

function ChartIndicator() {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        padding: "10px",
        borderRadius: "15px",
        height: "300px",
      }}
    >
      <Stack direction="row" width="100%">
        <Box width="100%" padding="10px">
          <Chart />
        </Box>
        <Box
          width="200px"
          height={280}
          overflow="auto"
          sx={{
            backgroundColor: "primary.main",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          <Indicators />
        </Box>
      </Stack>
    </Box>
  );
}

export default ChartIndicator;
