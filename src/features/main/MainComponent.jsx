import { Box, styled } from "@mui/material";

const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: 56,
  [theme.breakpoints.up("sm")]: {
    marginLeft: 64,
  },
}));

function MainComponent({ children }) {
  return <Main>{children}</Main>;
}

export default MainComponent;
