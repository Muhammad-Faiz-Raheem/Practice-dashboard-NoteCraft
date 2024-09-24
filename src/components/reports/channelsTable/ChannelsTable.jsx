import { Box, Table, TableContainer } from "@mui/material";
import Header from "./Header";
import TablesBody from "./TablesBody";

function ChannelsTable({ tableData, isMdUp }) {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        padding: "10px",
        borderRadius: "15px",
        width: "100%",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
          borderRadius: "15px",
          scrollbarWidth: isMdUp ? "" : "none",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <Header />

          <TablesBody tableData={tableData} isMdUp={isMdUp} />
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ChannelsTable;
