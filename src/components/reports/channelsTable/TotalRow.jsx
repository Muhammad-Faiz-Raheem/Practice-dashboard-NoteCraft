import { Filter2, FilterList } from "@mui/icons-material";
import { Stack, TableCell, TableRow, Typography } from "@mui/material";

function TotalRow({ tableData }) {
  return (
    <TableRow>
      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{ fontSize: "14px", fontWeight: "700", paddingLeft: "30px" }}
          >
            Total
          </Typography>
          <Stack direction="row" spacing={1}>
            <Filter2 sx={{ fontSize: "14px", color: "grey.A6f" }} />
            <FilterList sx={{ fontSize: "15px", color: "grey.A6f" }} />
          </Stack>
        </Stack>
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {tableData.reduce((sum, item) => sum + item.sales, 0)}
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {tableData.reduce((sum, item) => sum + item.traffic, 0)}
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {tableData.reduce((sum, item) => sum + item.views, 0)}
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {(
          tableData.reduce((sum, item) => sum + item.ctr, 0) / tableData.length
        ).toFixed(1)}
        %
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {tableData.reduce((sum, item) => sum + item.leads, 0)}
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {(
          tableData.reduce((sum, item) => sum + item.cr, 0) / tableData.length
        ).toFixed(1)}
        %
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {tableData.reduce((sum, item) => sum + item.expenses, 0)} $
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {(
          tableData.reduce((sum, item) => sum + item.cpc, 0) / tableData.length
        ).toFixed(1)}{" "}
        $
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {(
          tableData.reduce((sum, item) => sum + item.cpl, 0) / tableData.length
        ).toFixed(1)}{" "}
        $
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {(
          tableData.reduce((sum, item) => sum + item.crToSales, 0) /
          tableData.length
        ).toFixed(1)}
        %
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {tableData.reduce((sum, item) => sum + item.profit, 0)} $
      </TableCell>

      <TableCell
        sx={{
          borderRight: "1px solid #6F6F761A",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {(
          tableData.reduce((sum, item) => sum + item.roi, 0) / tableData.length
        ).toFixed(1)}
        %
      </TableCell>

      <TableCell sx={{ fontSize: "12px", fontWeight: "700" }}>
        {(
          tableData.reduce((sum, item) => sum + item.romi, 0) / tableData.length
        ).toFixed(1)}
        %
      </TableCell>
    </TableRow>
  );
}

export default TotalRow;
