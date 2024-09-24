import {
  ClearOutlined,
  SearchOutlined,
  ViewListOutlined,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

function Indicators({ data }) {
  return (
    <Stack spacing={3 / 2}>
      <Box px={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="body1"
              color="common.black"
              fontSize={14}
              fontWeight={700}
            >
              Indicators
            </Typography>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center">
              <SearchOutlined sx={{ color: "grey.A6f", fontSize: "16px" }} />
              <ViewListOutlined sx={{ color: "grey.A6f", fontSize: "16px" }} />
              <ClearOutlined sx={{ color: "grey.A6f", fontSize: "16px" }} />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Stack>
        {data.map((item) => (
          <Stack key={item.category} sx={{ color: "grey.A6f" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              paddingRight={1}
              color={
                item.category === "Sales" || item.category === "Traffic"
                  ? "common.black"
                  : ""
              }
            >
              <Stack direction="row" alignItems="center" spacing={1 / 3}>
                <Box
                  sx={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "20px",
                    backgroundColor:
                      item.category === "Sales"
                        ? "#6A1B9A"
                        : item.category === "Traffic"
                        ? "#0277BD"
                        : "grey.A6f",
                  }}
                />
                <Typography fontSize={14}>{item.category}</Typography>
              </Stack>
              <Stack>
                <Typography fontSize={14}>{item.value}</Typography>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              paddingLeft={2}
              paddingRight={1}
              color={
                item.category === "Sales" || item.category === "Traffic"
                  ? "common.black"
                  : ""
              }
              marginBottom={
                item.category === "Sales" || item.category === "Traffic"
                  ? 3 / 2
                  : 0
              }
            >
              <Typography sx={{ fontSize: "10px" }}>CR</Typography>
              <Typography sx={{ fontSize: "10px" }}>{item.CR}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Indicators;
