import {
  AddCircleOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

function Icons() {
  return (
    <Box sx={{ fontSize: "18px", color: "grey.A6f", cursor: "pointer" }}>
      <Stack direction="row" spacing={1}>
        <Box>
          <AddCircleOutlineOutlined />
        </Box>
        <Box>
          <SettingsOutlined />
        </Box>
      </Stack>
    </Box>
  );
}

export default Icons;
