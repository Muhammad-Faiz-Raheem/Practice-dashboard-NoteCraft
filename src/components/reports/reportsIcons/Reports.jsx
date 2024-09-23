import { SettingsOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";

function Reports() {
  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <CustomButton borderColor={"warning.main"}>Main</CustomButton>
        <CustomButton>Devices</CustomButton>
        <CustomButton>Pay cahnnels</CustomButton>
        <CustomButton>Days</CustomButton>
        <CustomButton>Managers</CustomButton>
        <CustomButton>MQL/CR</CustomButton>
        <CustomButton>Sales</CustomButton>
      </Stack>
    </Box>
  );
}

function CustomButton({ borderColor, children }) {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{
        color: "common.black",
        textTransform: "none",
        borderColor: borderColor ? borderColor : "grey.A6f",
        borderRadius: "15px",
        fontSize: "12px",
        fontWeight: "700",
      }}
      endIcon={<SettingsOutlined sx={{ height: "14px", color: "grey.A6f" }} />}
    >
      {children}
    </Button>
  );
}

export default Reports;
