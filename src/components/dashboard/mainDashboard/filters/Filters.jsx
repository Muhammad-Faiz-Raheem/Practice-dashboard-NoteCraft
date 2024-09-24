import {
  ChevronLeft,
  ChevronRight,
  DateRangeOutlined,
} from "@mui/icons-material";
import { Button, FormControl, MenuItem, Select, Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const filter = [
  { id: Math.random(), type: "Today" },
  { id: Math.random(), type: "Yesterday" },
  { id: Math.random(), type: "Week" },
  { id: Math.random(), type: "Month" },
];

function Filters({ isSmUp, isXSmUp }) {
  return (
    <Stack
      mb={1}
      direction="row"
      alignItems="center"
      justifyContent={isSmUp ? "" : "space-between"}
      flexWrap="wrap"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["SingleInputDateRangeField"]}
          sx={{ width: "255px", overflow: "hidden" }}
        >
          <DateRangePicker
            slots={{ field: SingleInputDateRangeField }}
            format="DD MMM YY" // Ensuring the format is applied
            slotProps={{
              textField: {
                placeholder: "Start Date - End Date", // Placeholder for the input field
                InputProps: {
                  sx: {
                    height: "30px",
                    fontSize: "12px", // Smaller font size
                    fontWeight: "600",
                    color: "common.black",
                    padding: "6px", // Control padding for smaller height
                    borderRadius: "30px", // Rounded corners
                    width: isSmUp ? "230px" : "250px", // Custom width
                    border: "1px solid", // Border color
                    borderColor: "warning.main",
                    cursor: "pointer",
                    overflow: "hidden",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "common.black", // Change the placeholder color here
                      paddingLeft: "5px",
                      opacity: 1, // Ensure the opacity is set (by default it might be lower)
                    },
                  },

                  // Add icons using InputAdornment
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeOutlined
                        sx={{ color: "grey.A6f", fontSize: "20px" }}
                      />
                      <ChevronLeft
                        sx={{
                          color: "grey.A6f",
                          fontSize: "20px",
                          marginLeft: "4px",
                        }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <ChevronRight
                        sx={{ color: "grey.A6f", fontSize: "20px" }}
                      />
                    </InputAdornment>
                  ),
                },
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>

      {isSmUp ? (
        <Stack direction="row" spacing={3 / 2}>
          {filter.map((item) => (
            <Button
              key={item.id}
              variant="outlined"
              sx={{
                color: "common.black",
                borderColor: "grey.A6f",
                borderRadius: "30px",
                fontSize: "12px",
                fontWeight: "600",
                padding: "4px 4px 3px 4px",
                position: "relative",
                top: "5px",
                textTransform: "none",
              }}
            >
              {item.type}
            </Button>
          ))}
        </Stack>
      ) : (
        <FormControl
          sx={{ minWidth: isXSmUp ? 120 : 250, mt: "8px" }}
          size="small"
        >
          <Select
            id="demo-select-small"
            // value={selectedFilter}
            // onChange={(e) => handleChange(e.target.value)}
            defaultValue={filter.at(0).type}
            sx={{
              margin: 0,
              height: "30px",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid",
                borderRadius: "30px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid", // Thicker border when focused
              },
              "& .MuiSelect-select": {
                fontSize: "11px",
                fontWeight: "400",
                lineHeight: "15.39px",
              },
            }}
          >
            {filter.map((data) => (
              <MenuItem
                value={data.type}
                key={data.id}
                sx={{
                  fontSize: "10px",
                  mt: "-12px",
                }}
              >
                {data.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
}

export default Filters;
