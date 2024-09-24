import { Box, Stack } from "@mui/material";
import Chart from "./Chart";
import Indicators from "./Indicators";

const data = [
  {
    category: "Sales",
    value: 872,
    CR: "71%",
  },
  {
    category: "Traffic",
    value: 123565,
    CR: "2.5%",
  },
  {
    category: "Leads",
    value: 1236,
    CR: "3.5%",
  },
  {
    category: "MQL",
    value: 678,
    CR: "56%",
  },
  {
    category: "SQL",
    value: 695,
    CR: "44%",
  },
  {
    category: "Meetings",
    value: 342,
    CR: "34%",
  },
  {
    category: "Canceled order",
    value: 459,
    CR: "23%",
  },
  {
    category: "Pending order",
    value: 342,
    CR: "23%",
  },
];

function ChartIndicator({ isMdUp }) {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        padding: "10px",
        borderRadius: "15px",
        height: "320px",
        overflow: "auto",
        scrollbarWidth: isMdUp ? "" : "none",
      }}
    >
      <Stack
        direction="row"
        width="100%"
        sx={{ minWidth: "800px", overflow: "auto" }}
      >
        <Box width="100%" padding="10px">
          <Chart />
        </Box>
        <Box
          width="250px"
          height={290}
          overflow="auto"
          sx={{
            backgroundColor: "primary.main",
            padding: "10px",
            borderRadius: "15px",
            scrollbarWidth: isMdUp ? "" : "none",
          }}
        >
          <Indicators data={data} />
        </Box>
      </Stack>
    </Box>
  );
}

export default ChartIndicator;
