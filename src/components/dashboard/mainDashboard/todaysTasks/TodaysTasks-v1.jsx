import {
  ChatBubbleOutlineOutlined,
  ControlPoint,
  CreateOutlined,
  DoneOutlined,
  LocalPhoneOutlined,
} from "@mui/icons-material";
import { Badge, Box, Stack, Typography } from "@mui/material";
import { IoMdReturnRight } from "react-icons/io";

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
                sx={{ fontSize: "11px", fontWeight: "800", lineHeight: "15px" }}
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

        <Box>
          <Stack
            direction="row"
            spacing={1}
            sx={{ overflow: "auto", scrollbarWidth: "none" }}
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
                    }}
                  >
                    {(event.agenda || event.todo) && (
                      <Typography
                        sx={{
                          fontSize: "9px",
                          fontWeight: "500",
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
                          lineHeight: "7px",
                          padding: "2px",
                        }}
                      >
                        {event.agenda ? event.agenda : event.todo}
                      </Typography>
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
        </Box>
      </Stack>
    </Box>
  );
}

export default TodaysTasks;
