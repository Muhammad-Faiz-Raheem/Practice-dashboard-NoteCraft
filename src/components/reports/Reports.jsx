import { Box, Stack } from "@mui/material";
import CalenderIcons from "./calenderIcons/CalenderIcons";
import ChartIndicator from "./dashboardChart/ChartIndicator";
import ReportsIcons from "./reportsIcons/ReportsIcons";
import ChannelsTable from "./channelsTable/ChannelsTable";
import {
  AttachMoney,
  InsertLinkOutlined,
  MailOutlineOutlined,
  NearMeOutlined,
  SearchOutlined,
  SupervisorAccountOutlined,
  ViewHeadlineOutlined,
} from "@mui/icons-material";

const tableData = [
  {
    channel: {
      icon: <AttachMoney sx={{ fontSize: "16px" }} />,
      name: "Pay channels",
    },
    sales: 312,
    traffic: 16565,
    views: 2345,
    ctr: 5.2,
    leads: 123,
    cr: 2.4,
    expenses: 34567,
    cpc: 2.6,
    cpl: 345,
    crToSales: 12.4,
    profit: 34677,
    roi: 14.8,
    romi: 14.8,
  },

  {
    channel: {
      icon: <SupervisorAccountOutlined sx={{ fontSize: "16px" }} />,
      name: "PR channels",
    },
    sales: 242,
    traffic: 17536,
    views: 0,
    ctr: 0,
    leads: 112,
    cr: 9.4,
    expenses: 45568,
    cpc: 3.63,
    cpl: 455,
    crToSales: 2.5,
    profit: 3765,
    roi: 0,
    romi: 0,
  },

  {
    channel: {
      icon: <SearchOutlined sx={{ fontSize: "16px" }} />,
      name: "Organic channels",
    },
    sales: 123,
    traffic: 4525,
    views: 67789,
    ctr: 3.7,
    leads: 25,
    cr: 6.3,
    expenses: 34567,
    cpc: 2.8,
    cpl: 11,
    crToSales: 5.6,
    profit: 128680,
    roi: 0,
    romi: 0,
  },

  {
    channel: {
      icon: null,
      name: "Google",
    },
    sales: 312,
    traffic: 235355,
    views: 0,
    ctr: 3.7,
    leads: 15,
    cr: 0.04,
    expenses: 56236,
    cpc: 11.35,
    cpl: 345,
    crToSales: 5.6,
    profit: 57835,
    roi: 2.9,
    romi: 16.3,
  },

  {
    channel: { icon: null, name: "Bing" },
    sales: 56,
    traffic: 9550,
    views: 0,
    ctr: 0,
    leads: 12,
    cr: 0.5,
    expenses: 0,
    cpc: 0,
    cpl: 0,
    crToSales: 0.9,
    profit: 4575,
    roi: 14.9,
    romi: 5.7,
  },

  {
    channel: { icon: null, name: "Yahoo" },
    sales: 45,
    traffic: 7348,
    views: 0,
    ctr: 0,
    leads: 39,
    cr: 3.8,
    expenses: 0,
    cpc: 0,
    cpl: 0,
    crToSales: 3.7,
    profit: 36795,
    roi: 32.7,
    romi: 0.6,
  },

  {
    channel: {
      icon: null,
      name: "Yandex",
    },
    sales: 12,
    traffic: 4345,
    views: 0,
    ctr: 0,
    leads: 8,
    cr: 4.5,
    expenses: 0,
    cpc: 45.6,
    cpl: 39,
    crToSales: 11.0,
    profit: 2145,
    roi: 34.7,
    romi: 15.7,
  },

  {
    channel: {
      icon: <NearMeOutlined sx={{ fontSize: "16px" }} />,
      name: "Direct channels",
    },
    sales: 78,
    traffic: 9275,
    views: 0,
    ctr: 0,
    leads: 21,
    cr: 3.9,
    expenses: 0,
    cpc: 0,
    cpl: 0,
    crToSales: 5.7,
    profit: 7893,
    roi: 12.7,
    romi: 17.8,
  },

  {
    channel: {
      icon: <InsertLinkOutlined sx={{ fontSize: "16px" }} />,
      name: "Referral channels",
    },
    sales: 67,
    traffic: 6975,
    views: 0,
    ctr: 0,
    leads: 32,
    cr: 1.9,
    expenses: 12885,
    cpc: 12.85,
    cpl: 235,
    crToSales: 5.7,
    profit: 11475,
    roi: 0,
    romi: 0,
  },

  {
    channel: {
      icon: <MailOutlineOutlined sx={{ fontSize: "16px" }} />,
      name: "Mail channels",
    },
    sales: 55,
    traffic: 12567,
    views: 23745,
    ctr: 2.6,
    leads: 11,
    cr: 0.3,
    expenses: 32567,
    cpc: 0.75,
    cpl: 7.05,
    crToSales: 13.6,
    profit: 178935,
    roi: 18.0,
    romi: 44.9,
  },

  {
    channel: {
      icon: <ViewHeadlineOutlined sx={{ fontSize: "16px" }} />,
      name: "Other",
    },
    sales: 12,
    traffic: 4692,
    views: 1988,
    ctr: 2.9,
    leads: 14,
    cr: 0.8,
    expenses: 34567,
    cpc: 2.45,
    cpl: 4.78,
    crToSales: 1.6,
    profit: 18435,
    roi: 1.0,
    romi: 4.9,
  },
];

function Reports({ isMdUp, isSmUp, isXSmUp }) {
  return (
    <Box padding="5px 15px 15px 15px" overflow="auto" height="100svh">
      <Stack spacing={1}>
        <Box>
          <CalenderIcons isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
        </Box>

        <Box>
          <ChartIndicator isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
        </Box>

        <Box>
          <ReportsIcons />
        </Box>

        <Box>
          <ChannelsTable
            tableData={tableData}
            isMdUp={isMdUp}
            isSmUp={isSmUp}
            isXSmUp={isXSmUp}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Reports;
