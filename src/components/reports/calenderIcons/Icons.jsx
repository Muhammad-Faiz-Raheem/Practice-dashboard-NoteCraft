import { Box, colors, Stack } from "@mui/material";
import {
  MdOutlineBubbleChart,
  MdOutlineExtension,
  MdOutlineSaveAlt,
  MdOutlineSearch,
  MdOutlineSettings,
} from "react-icons/md";
import { RiTriangleLine } from "react-icons/ri";

function Icons() {
  return (
    <Box mt={1} sx={{ fontSize: "18px", color: "grey.A6f", cursor: "pointer" }}>
      <Stack direction="row" spacing={1}>
        <Box
          style={{
            transform: "rotate(-90deg)",
            fontSize: "16px",
            marginTop: "-5px",
          }}
        >
          <RiTriangleLine />
        </Box>
        <Box>
          <MdOutlineExtension />
        </Box>
        <Box>
          <MdOutlineBubbleChart />
        </Box>
        <Box>
          <MdOutlineSearch />
        </Box>
        <Box>
          <MdOutlineSaveAlt />
        </Box>
        <Box>
          <MdOutlineSettings />
        </Box>
      </Stack>
    </Box>
  );
}

export default Icons;
