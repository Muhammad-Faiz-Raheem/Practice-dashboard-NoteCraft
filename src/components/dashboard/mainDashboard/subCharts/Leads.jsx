import { Box, Stack, Typography } from "@mui/material";
import { IoMdReturnRight } from "react-icons/io";

const data = [
  {
    id: Math.random(),
    name: "MQL",
    count: 3,
    total: 456,
    ConversationRate: "71%",
  },

  {
    id: Math.random(),
    name: "SQL",
    count: 2,
    total: 456,
    ConversationRate: "38%",
  },

  {
    id: Math.random(),
    name: "Meeting",
    count: 0,
    total: 956,
    ConversationRate: "59%",
  },

  {
    id: Math.random(),
    name: "Sells",
    count: 0,
    total: 567,
    ConversationRate: "61%",
  },
  {
    id: Math.random(),
    name: "Meeting",
    count: 0,
    total: 889,
    ConversationRate: "73%",
  },
  {
    id: Math.random(),
    name: "Meeting",
    count: 1,
    total: 681,
    ConversationRate: "53%",
  },
  {
    id: Math.random(),
    name: "SQL",
    count: 4,
    total: 424,
    ConversationRate: "42%",
  },
  {
    id: Math.random(),
    name: "SQL",
    count: 4,
    total: 709,
    ConversationRate: "44%",
  },
  {
    id: Math.random(),
    name: "SQL",
    count: 5,
    total: 616,
    ConversationRate: "44%",
  },
  {
    id: Math.random(),
    name: "SQL",
    count: 2,
    total: 417,
    ConversationRate: "59%",
  },
  {
    id: Math.random(),
    name: "Meeting",
    count: 5,
    total: 447,
    ConversationRate: "56%",
  },
  {
    id: Math.random(),
    name: "SQL",
    count: 5,
    total: 623,
    ConversationRate: "56%",
  },
  {
    id: Math.random(),
    name: "Meeting",
    count: 5,
    total: 716,
    ConversationRate: "74%",
  },
  {
    id: Math.random(),
    name: "Meeting",
    count: 4,
    total: 629,
    ConversationRate: "38%",
  },
];

function Leads() {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderRadius: "15px",
        padding: "10px",
        // width: "200px",
        height: "250px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" padding="15px 30px">
        <Box>
          <Typography
            sx={{ color: "common.black", fontSize: "14px", fontWeight: "800" }}
          >
            Leads
          </Typography>
        </Box>
        <Box sx={{ color: "grey.A6f", fontSize: "20px" }}>
          <IoMdReturnRight />
        </Box>
      </Stack>

      <Stack
        spacing={1}
        overflow="auto"
        height="155px"
        sx={{ scrollbarWidth: "none" }}
      >
        {data.map((data) => (
          <Box key={data.id}>
            <Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  sx={{
                    color: "common.black",
                    fontSize: "14px",
                    fontWeight: "800",
                  }}
                >
                  {data.name}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {data.count ? (
                    <Typography
                      sx={{
                        color: "common.black",
                        fontSize: "14px",
                        fontWeight: "800",
                      }}
                    >
                      {data.count}
                    </Typography>
                  ) : null}
                  <Typography
                    sx={{
                      color: "common.black",
                      fontSize: "14px",
                      fontWeight: "800",
                    }}
                  >
                    {data.total}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  sx={{
                    color: "common.black",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Conversation rate
                </Typography>
                <Typography
                  sx={{
                    color: "common.black",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  {data.ConversationRate}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Leads;
