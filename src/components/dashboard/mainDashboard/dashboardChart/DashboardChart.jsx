import { Circle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { IoMdReturnRight } from "react-icons/io";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          className="label"
          style={{
            color: "#6F6F76",
            fontWeight: "800",
            fontSize: "12px",
          }}
        >{`${label}`}</p>
        <p
          className="intro"
          style={{ fontSize: "12px", fontWeight: "500" }}
        >{`${payload[0].name.toUpperCase()}: ${payload[0].value}`}</p>
        <p
          className="intro"
          style={{ fontSize: "12px", fontWeight: "500" }}
        >{`${payload[1].name.toUpperCase()}: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
}

const data = [
  { month: "Jan", sales: 40, traffic: 24 },
  { month: "Feb", sales: 30, traffic: 18 },
  { month: "Mar", sales: 20, traffic: 50 },
  { month: "Apr", sales: 28, traffic: 39 },
  { month: "May", sales: 35, traffic: 42 },
  { month: "Jun", sales: 25, traffic: 33 },
  { month: "Jul", sales: 47, traffic: 29 },
  { month: "Aug", sales: 53, traffic: 41 },
  { month: "Sep", sales: 45, traffic: 34 },
  { month: "Oct", sales: 22, traffic: 27 },
  { month: "Nov", sales: 38, traffic: 19 },
  { month: "Dec", sales: 48, traffic: 31 },
];

function DashboardChart({ isSmUp, isMdUp }) {
  return (
    <Box sx={{ overflow: "auto", scrollbarWidth: isSmUp ? "" : "none" }}>
      <Box
        minWidth="500px"
        height={isMdUp ? "200px" : "175px"}
        position="relative"
        mb={9}
      >
        <Box width="100%" height="100%">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: "10px 10px" }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "800", marginLeft: "25px" }}
              >
                Dashboard
              </Typography>
            </Box>
            <Box sx={{ color: "grey.A6f" }}>
              <IoMdReturnRight />
            </Box>
          </Stack>

          <ResponsiveContainer
            width="100%"
            height="100%"
            style={{ position: "absolute", left: "-25px" }}
          >
            <LineChart
              width={500}
              height={250}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#6F6F761A" />
              <XAxis
                dataKey="month"
                tick={{
                  fontSize: "10px",
                  fontWeight: "500",
                  fill: "#6F6F76",
                }}
                axisLine={{ stroke: "none" }}
                tickLine={{ stroke: "none" }}
              />
              <YAxis
                tick={{ fontSize: "8px", fontWeight: "500", fill: "#6F6F76" }}
                axisLine={{ stroke: "none" }}
                tickLine={{ stroke: "none" }}
                tickCount={7}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
              />
              <Tooltip content={CustomTooltip} />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#C62828"
                dot={false}
                strokeWidth={2}
                // activeDot={{ r: 0 }}
              />
              <Line
                type="monotone"
                dataKey="traffic"
                stroke="#0277BD"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>

          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            position="absolute"
            bottom={-60}
            left={30}
          >
            <Stack direction="row" spacing={1}>
              <Circle sx={{ fontSize: "14px", color: "#C62828" }} />
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "common.black",
                }}
              >
                Sales
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Circle sx={{ fontSize: "14px", color: "#0277BD" }} />
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "common.black",
                }}
              >
                Traffic
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardChart;
