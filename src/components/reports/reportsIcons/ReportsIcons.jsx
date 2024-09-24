import { Box, Stack } from "@mui/material";
import Reports from "./Reports";
import Icons from "./Icons";

function ReportsIcons() {
  return (
    <Box padding="5px">
      <Stack
        direction="row"
        columnGap={2}
        rowGap={2}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box>
          <Reports />
        </Box>
        <Box>
          <Icons />
        </Box>
      </Stack>
    </Box>
  );
}

export default ReportsIcons;
