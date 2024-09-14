import { Badge, Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { IoMdReturnRight } from "react-icons/io";
import {
  ChatBubbleOutlineOutlined,
  ChevronLeft,
  ChevronRight,
  ControlPoint,
  CreateOutlined,
  DoneOutlined,
  LocalPhoneOutlined,
} from "@mui/icons-material";

const events = [
  {
    heading: "Team Meeting",
    time: "10:00 AM",
    day: "Mon",
    agenda: "",
    todo: "",
    eventType: "message",
  },
  {
    heading: "Client Call",
    time: "",
    day: "",
    agenda: "",
    todo: "Prepare client presentation.",
    eventType: "call",
  },
  {
    heading: "Marketing Sync",
    time: "11:00 AM",
    day: "Wed",
    agenda: "",
    todo: "",
    eventType: "physical",
  },
  {
    heading: "Project Review",
    time: "03:00 PM",
    day: "Thu",
    agenda: "",
    todo: "",
    eventType: "call",
  },
  {
    heading: "Sales Pipeline Meeting",
    time: "09:00 AM",
    day: "Fri",
    agenda: "",
    todo: "",
    eventType: "call",
  },
  {
    heading: "Meeting with Team",
    time: "05:30 PM",
    day: "Wed",
    agenda: "Talk about work-life balance in the sell department.",
    todo: "",
    eventType: "physical",
  },
  {
    heading: "One-on-One",
    time: "04:00 PM",
    day: "Tue",
    agenda: "Discuss career growth opportunities.",
    todo: "",
    eventType: "call",
  },
  {
    heading: "Budget Meeting",
    time: "12:00 PM",
    day: "Wed",
    agenda: "",
    todo: "Prepare budget summary for the quarter.",
    eventType: "call",
  },
  {
    heading: "Design Review",
    time: "11:30 AM",
    day: "Thu",
    agenda: "Finalize design concepts for new campaign.",
    todo: "",
    eventType: "message",
  },
  {
    heading: "HR Policy Review",
    time: "03:30 PM",
    day: "Fri",
    agenda: "",
    todo: "",
    eventType: "call",
  },
  {
    heading: "Client Follow-up",
    time: "02:00 PM",
    day: "Mon",
    agenda: "Follow up on contract finalization.",
    todo: "",
    eventType: "message",
  },
  {
    heading: "Product Launch Prep",
    time: "01:00 PM",
    day: "Tue",
    agenda: "",
    todo: "Check all marketing materials for the product launch.",
    eventType: "message",
  },
  {
    heading: "Quarterly Review",
    time: "10:00 AM",
    day: "Wed",
    agenda: "",
    todo: "",
    eventType: "physical",
  },
  {
    heading: "Team Celebration",
    time: "05:00 PM",
    day: "Thu",
    agenda: "Celebrate project success with the team.",
    todo: "",
    eventType: "physical",
  },
  {
    heading: "Strategy Session",
    time: "09:30 AM",
    day: "Fri",
    agenda: "",
    todo: "Compile competitor analysis report.",
    eventType: "message",
  },
];

function TodaysTasks() {
  const [isScrolledLeft, setIsScrolledLeft] = useState(false);
  const [isScrolledRight, setIsScrolledRight] = useState(true);
  const containerRef = useRef(null);
  const scrollAmount = 20;

  // Function to scroll to the right
  const handleScrollRight = () => {
    const container = containerRef.current;
    container.scrollLeft += scrollAmount; // Increase scroll position
  };

  // Function to scroll to the left
  const handleScrollLeft = () => {
    const container = containerRef.current;
    container.scrollLeft -= scrollAmount; // Decrease scroll position
  };

  // Function to check scroll position
  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    // Check if scrolled from the start (left)
    if (scrollLeft > 2) {
      setIsScrolledLeft(true);
    } else {
      setIsScrolledLeft(false);
    }

    // Check if scrolled to the end (right)
    if (scrollLeft + clientWidth >= scrollWidth - 2) {
      setIsScrolledRight(false);
    } else {
      setIsScrolledRight(true);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    // Add scroll event listener
    container.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box padding="12px 40px">
      <Stack width="100%" spacing={1}>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "common.black",
                  lineHeight: "15px",
                }}
              >
                Today&apos;s tasks
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={1}>
                <ControlPoint sx={{ color: "grey.A6f", fontSize: "17px" }} />
                <Typography sx={{ color: "grey.A6f", fontSize: "15px" }}>
                  <IoMdReturnRight />
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box position="relative">
          <Box
            onClick={handleScrollLeft}
            sx={{
              position: "absolute",
              zIndex: "50",
              left: "-30px",
              top: "45px",
              cursor: "pointer",
            }}
          >
            <ChevronLeft sx={{ fontSize: "18px", color: "grey.A6f" }} />
          </Box>

          {isScrolledLeft && (
            <Box
              sx={{
                position: "absolute",
                left: -30,
                top: 25,
                width: "130px",
                height: "80px",
                background: (theme) =>
                  `linear-gradient(transparent, ${theme.palette.common.white})`,
                transform: "rotate(90deg)",
                pointerEvents: "none",
              }}
            />
          )}

          <Stack
            direction="row"
            spacing={1}
            sx={{ overflow: "auto", scrollbarWidth: "none" }}
            ref={containerRef}
          >
            {events.map((event) => (
              <Box
                key={event.heading}
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "12px",
                  padding: "5px 8px 7px 8px",
                  minWidth: "90px",
                  height: "130px",
                }}
              >
                <Stack>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        fontWeight: "800",
                        lineHeight: "14px",
                        color: "common.black",
                        height: "40px",
                      }}
                    >
                      {event.heading}
                    </Typography>
                  </Box>

                  <Box height="25px">
                    {event.time && (
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "800",
                          color: "common.black",
                          lineHeight: "10px",
                        }}
                      >
                        {event.time}
                      </Typography>
                    )}
                    {event.day && (
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "800",
                          color: "common.black",
                          lineHeight: "12px",
                        }}
                      >
                        {event.day}
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      height: "27px",
                      overflow: "auto",
                      scrollbarWidth: "none",
                      position: "relative",
                    }}
                  >
                    {(event.agenda || event.todo) && (
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: "500",
                          color: "common.black",
                          lineHeight: "12px",
                          marginBottom: "2px",
                        }}
                      >
                        {event.agenda ? "Agenda:" : "To do:"}
                      </Typography>
                    )}
                    {(event.agenda || event.todo) && (
                      <Typography
                        sx={{
                          fontSize: "8px",
                          fontWeight: "400",
                          color: "common.black",
                          opacity: "0.8",
                          lineHeight: "7px",
                          padding: "2px",
                        }}
                      >
                        {event.agenda ? event.agenda : event.todo}
                      </Typography>
                    )}

                    {/* Bottom blur effect */}
                    {(event.agenda || event.todo) && (
                      <Box
                        sx={{
                          position: "sticky",
                          bottom: -1,
                          left: 0,
                          right: 0,
                          height: "7px",
                          background: (theme) =>
                            `linear-gradient(transparent, ${theme.palette.common.white})`,
                          pointerEvents: "none",
                        }}
                      />
                    )}
                  </Box>

                  <Box marginTop="5px">
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <DoneOutlined
                        sx={{ fontSize: "18px", color: "grey.A6f" }}
                      />
                      {event.eventType === "call" ? (
                        <LocalPhoneOutlined
                          sx={{ fontSize: "18px", color: "grey.A6f" }}
                        />
                      ) : (
                        <Badge
                          variant="dot"
                          color="warning"
                          sx={{
                            "& .MuiBadge-dot": {
                              top: "2px",
                              right: "2px",
                              height: "6px ",
                              minWidth: "6px",
                            },
                          }}
                        >
                          {event.eventType === "message" ? (
                            <ChatBubbleOutlineOutlined
                              sx={{ fontSize: "16px" }}
                            />
                          ) : (
                            <CreateOutlined
                              sx={{ fontSize: "16px", color: "grey.A6f" }}
                            />
                          )}
                        </Badge>
                      )}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>

          {isScrolledRight && (
            <Box
              sx={{
                position: "absolute",
                right: -30,
                top: 25,
                width: "130px",
                height: "80px",
                background: (theme) =>
                  `linear-gradient(transparent, ${theme.palette.common.white})`,
                transform: "rotate(-90deg)",
                pointerEvents: "none",
              }}
            />
          )}

          <Box
            onClick={handleScrollRight}
            sx={{
              position: "absolute",
              zIndex: "50",
              right: "-30px",
              top: "45px",
              cursor: "pointer",
            }}
          >
            <ChevronRight sx={{ fontSize: "18px", color: "grey.A6f" }} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default TodaysTasks;
