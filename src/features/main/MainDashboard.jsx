import { Box, Stack, styled, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import RightMenu from "../../components/dashboard/rightMenu/RightMenu";
import MainContainer from "../../components/dashboard/mainDashboard/MainContainer";

const rightMenuWidth = 300;

const Main = styled(Box)(({ open, isOverlay, fromRight }) => ({
  width: "100%",
  height: "100svh",
  flexGrow: 1,
  overflowY: "auto",
  scrollbarWidth: "none",
  transition: "margin 0.5s ease-in-out",
  marginRight: isOverlay
    ? `${fromRight + 10}px`
    : open
    ? `${rightMenuWidth + fromRight}px`
    : `${fromRight + 12}px`,
  zIndex: 1,
}));

const RightMenuContainer = styled(Box)(
  ({ theme, open, isOverlay, fromRight }) => ({
    right: fromRight,
    width: isOverlay ? rightMenuWidth - 50 : rightMenuWidth,
    height: "100vh",
    backgroundColor: theme.palette.common.white,
    overflowY: "auto",
    scrollbarWidth: "none",
    transition: "transform 0.5s ease-in-out ",
    transform: open ? "translateX(0)" : `translateX(${rightMenuWidth - 12}px)`,
    [theme.breakpoints.down("md")]: {
      transform: !open
        ? "translateX(0)"
        : `translateX(${rightMenuWidth - 50 - 10}px)`,
    },
    zIndex: isOverlay ? 10 : 2,
    position: "absolute",
  })
);

function MainDashboard() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isXSmUp = useMediaQuery(theme.breakpoints.up("xs"));
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Stack
      direction="row"
      height="100svh"
      width="100svw"
      overflow="hidden"
      position="relative"
    >
      <Main
        open={isOpen}
        isOverlay={!isMdUp}
        fromRight={isSmUp ? 64 : 56}
        // onClick={() => setIsOpen(isMdUp ? false : true)}
      >
        <MainContainer isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
      </Main>

      <RightMenuContainer
        open={isOpen}
        isOverlay={!isMdUp}
        fromRight={isSmUp ? 64 : 56}
      >
        <Stack direction="row">
          <Box
            height="100svh"
            display="flex"
            alignItems="center"
            onClick={() => setIsOpen((open) => !open)}
            sx={{ cursor: "pointer" }}
          >
            {isOpen ? <HiChevronRight /> : <HiChevronLeft />}
          </Box>
          <Box
            sx={{
              height: "100svh",
              width: "100%",
              textAlign: "justify",
            }}
          >
            <RightMenu isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
          </Box>
        </Stack>
      </RightMenuContainer>
    </Stack>
  );
}

export default MainDashboard;
