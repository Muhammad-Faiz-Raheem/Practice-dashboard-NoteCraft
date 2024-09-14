import { Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";

function Searchbar() {
  return (
    <Box>
      <TextField
        type="search"
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Type something"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            height: "28px",
            "& fieldset": {
              borderColor: "grey.A6f",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid",
              borderColor: "grey.A6f",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: "12px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search
                sx={{
                  fontSize: "18px",
                  marginLeft: "-6px",
                  color: "grey.A6f",
                }}
              />
            </InputAdornment>
          ),
          inputProps: {
            sx: {
              "&::placeholder": {
                fontSize: "12px",
                color: "grey.A6f",
                opacity: "0.8",
              },
            },
          },
        }}
      />
    </Box>
  );
}

export default Searchbar;
