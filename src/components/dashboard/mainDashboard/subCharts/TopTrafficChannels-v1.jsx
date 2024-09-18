import { Circle } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { IoMdReturnRight } from "react-icons/io";

// Original data with fixed colors for the first cell
const baseData = [
  { name: "Organic", value: 22, color: "#C62828" },
  { name: "Paid", value: 19, color: "#283593" },
  { name: "Social", value: 18, color: "#6A1B9A" },
  { name: "Referal", value: 16, color: "#00695C" },
  { name: "Mail", value: 15, color: "#F9A825" },
  { name: "Other", value: 10, color: "#0277BD" },
];

const size = {
  width: 400,
  height: 200,
};

function TopTrafficChannels() {
  const theme = useTheme(); // Access the current theme

  // Apply theme-based colors to the second cell while keeping the first cell's original color
  const getPieData = () => {
    return baseData.map((item) => ({
      ...item,
      backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#F5F5FC", // Background color changes based on theme
    }));
  };

  const pieData = getPieData();

  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderRadius: "15px",
        padding: "10px",
        height: "250px",
        width: "100%",
      }}
    >
      <Stack position="relative" width="100%">
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            padding="15px 30px"
          >
            <Box>
              <Typography
                sx={{
                  color: "common.black",
                  fontSize: "14px",
                  fontWeight: "800",
                }}
              >
                Top Traffic Channels
              </Typography>
            </Box>
            <Box sx={{ color: "grey.A6f", fontSize: "20px" }}>
              <IoMdReturnRight />
            </Box>
          </Stack>
        </Box>

        <Box position="relative" top={-20} left={-50}>
          {pieData.map((data, index) => (
            <Box key={data.name} position="absolute">
              <PieChart
                series={[
                  {
                    data: [
                      {
                        value: data.value,
                        color: data.color,
                      }, // Keep original color for first cell
                      {
                        value: 100 - data.value,
                        color: data.backgroundColor,
                      }, // Use theme-based color for the second cell
                    ],
                    innerRadius: 85 - index * 10,
                    outerRadius: 93 - index * 10,
                    cornerRadius: 10,
                  },
                ]}
                {...size}
              />
            </Box>
          ))}
        </Box>

        <Stack spacing={1} position="absolute" width="100%" left={230} top={50}>
          {pieData.map((data) => (
            <Stack
              direction="row"
              spacing={1}
              key={data.name}
              alignItems="center"
            >
              <Circle
                sx={{
                  fontSize: "15px",
                  color: data.color, // Keep original color for the legend icon
                }}
              />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "800",
                  color: "common.black",
                }}
              >
                {data.value}% {data.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default TopTrafficChannels;
