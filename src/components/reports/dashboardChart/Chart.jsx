import {
  Circle,
  SettingsOutlined,
  SignalCellularAltOutlined,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Nov", Sales: 20000, Traffic: 90000 },
  { month: "Dec", Sales: 70000, Traffic: 60000 },
  { month: "Jan", Sales: 50000, Traffic: 30000 },
  { month: "Feb", Sales: 40000, Traffic: 50000 },
  { month: "Mar", Sales: 60000, Traffic: 100000 },
  { month: "Apr", Sales: 80000, Traffic: 60000 },
  { month: "May", Sales: 30000, Traffic: 40000 },
  { month: "Jun", Sales: 70000, Traffic: 80000 },
  { month: "Jul", Sales: 10000, Traffic: 20000 },
  { month: "Aug", Sales: 50000, Traffic: 70000 },
  { month: "Sep", Sales: 20000, Traffic: 30000 },
  { month: "Oct", Sales: 40000, Traffic: 50000 },
  { month: "Nov", Sales: 30000, Traffic: 40000 },
];

function Chart() {
  return (
    <Box>
      <Stack>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                sx={{
                  paddingLeft: "10px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                Dashboard
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <SignalCellularAltOutlined
                  sx={{ fontSize: "12px", color: "grey.A6f" }}
                />
                <SettingsOutlined
                  sx={{ fontSize: "12px", color: "grey.A6f" }}
                />
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box position="relative">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 3, left: -35, bottom: 15 }}
            >
              <CartesianGrid stroke="#6F6F761A" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: "8px", fontWeight: "500", fill: "#6F6F76" }}
                axisLine={{ stroke: "none" }}
                tickLine={{ stroke: "none" }}
              />
              <YAxis
                axisLine={{ stroke: "none" }}
                tickLine={{ stroke: "none" }}
                tick={{ fontSize: "8px", fontWeight: "500", fill: "#6F6F76" }}
                tickCount={8}
                ticks={[0, 20000, 40000, 60000, 80000, 100000, 120000, 140000]}
                tickFormatter={(value) =>
                  value === 0 ? value : `${value / 1000}k`
                }
              />
              <Tooltip />
              <Bar dataKey="Sales" fill="#0277BD" radius={5} barSize={15} />
              <Bar dataKey="Traffic" fill="#6A1B9A" radius={5} barSize={15} />
            </BarChart>
          </ResponsiveContainer>

          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            position="absolute"
            bottom="0px"
            left={20}
          >
            <Stack direction="row" spacing={2 / 3} alignItems="center">
              <Circle sx={{ fontSize: "10px", color: "#0277BD" }} />
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "800",
                  color: "common.black",
                }}
              >
                Sales
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2 / 3} alignItems="center">
              <Circle sx={{ fontSize: "10px", color: "#6A1B9A" }} />
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "800",
                  color: "common.black",
                }}
              >
                Traffic
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Chart;
