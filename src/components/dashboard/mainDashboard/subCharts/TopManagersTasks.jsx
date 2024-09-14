import { Circle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { IoMdReturnRight } from "react-icons/io";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "JHK", completed: 100, inProgress: 0, fired: 30 },
  { month: "FHG", completed: 100, inProgress: 40, fired: 20 },
  { month: "LSL", completed: 100, inProgress: 50, fired: 20 },
  { month: "DLD", completed: 100, inProgress: 80, fired: 60 },
  { month: "USI", completed: 100, inProgress: 80, fired: 40 },
  { month: "SKA", completed: 100, inProgress: 60, fired: 45 },
  { month: "AAL", completed: 100, inProgress: 80, fired: 55 },
  { month: "FFR", completed: 0, inProgress: 100, fired: 40 },
  { month: "JHY", completed: 0, inProgress: 100, fired: 20 },
  { month: "UYT", completed: 100, inProgress: 70, fired: 20 },
  { month: "JKJ", completed: 100, inProgress: 70, fired: 40 },
];

// Tooltip styles
const tooltipStyles = {
  backgroundColor: "#1A2B88",
  padding: "2px 8px",
  borderRadius: "4px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
};

const legends = [
  { color: "#6A1B9A", name: "Completed" },
  { color: "#0277BD", name: "In progress" },
  { color: "#F9A825", name: "Fired" },
];

function TopManagersTasks({ isXSmUp }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Custom Tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataKey = payload[1].dataKey;
      const value = payload[1].value;

      return (
        <div className="custom-tooltip" style={tooltipStyles}>
          {dataKey === "inProgress" && (
            <p style={{ color: "white" }}>{value}</p>
          )}
          {dataKey === "fired" && <p style={{ color: "white" }}>{value}</p>}
        </div>
      );
    }

    return null;
  };

  // XAxis custom tick renderer
  function xAxisTick(props) {
    const { x, y, payload, index } = props;
    const isHovered = hoveredIndex === index;

    return (
      <text
        x={x}
        y={y}
        dy={5}
        fill={isHovered ? "#1F1515" : "#6F6F76"}
        fontSize="8px"
        fontWeight={isHovered ? "600" : "500"}
        fontFamily="'Work Sans', sans-serif"
        textAnchor="middle"
      >
        {payload.value}
      </text>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        padding: "15px",
        borderRadius: "15px",
        height: "250px",
        overflow: "auto",
      }}
    >
      <Box height="150px" position="relative">
        <Box width="100%" height="100%">
          <Stack
            direction="row"
            justifyContent="space-between"
            padding="15px 30px"
            width="100%"
          >
            <Box>
              <Typography
                sx={{
                  color: "common.black",
                  fontSize: "14px",
                  fontWeight: "800",
                }}
              >
                Top Managers (Tasks)
              </Typography>
            </Box>
            <Box sx={{ color: "grey.A6f", fontSize: "20px" }}>
              <IoMdReturnRight />
            </Box>
          </Stack>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 0,
                right: 0,
                bottom: 25,
                left: -35,
              }}
              barGap={"-76.5%"}
              onMouseMove={(state) => {
                if (state.isTooltipActive) {
                  setHoveredIndex(state.activeTooltipIndex);
                }
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
            >
              <XAxis
                tick={(props) => xAxisTick(props)}
                dataKey="month"
                axisLine={{ stroke: "none" }}
                tickLine={{ stroke: "none" }}
                tickMargin={10}
              />
              <YAxis
                tick={{
                  fontSize: "8px",
                  fontWeight: "400",
                  fontFamily: "'Work Sans', sans-serif",
                  fill: "#6F6F76",
                }}
                tickMargin={2}
                axisLine={{ stroke: "none" }}
                tickLine={{ stroke: "none" }}
                ticks={[0, 25, 50, 75, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="completed" fill="#6A1B9A" radius={8} />
              <Bar dataKey="inProgress" fill="#0277BD" radius={[8, 8, 8, 8]} />
              <Bar dataKey="fired" fill="#F9A825" radius={[0, 0, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            position="absolute"
            bottom={-60}
            justifyContent="center"
            width="95%"
          >
            {legends.map((legend) => (
              <Stack
                direction="row"
                spacing={1}
                key={legend.color}
                alignItems="center"
              >
                <Circle
                  sx={{
                    fontSize: isXSmUp ? "14px" : "8px",
                    color: legend.color,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: isXSmUp ? "11px" : "8px",
                    fontWeight: "800",
                    color: "common.black",
                  }}
                >
                  {legend.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default TopManagersTasks;
