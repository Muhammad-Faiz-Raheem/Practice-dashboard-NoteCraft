import {
  Checkbox,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import TotalRow from "./TotalRow";
import { ExpandMore } from "@mui/icons-material";

function TablesBody({ tableData }) {
  return (
    <TableBody
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <TotalRow tableData={tableData} />

      {tableData.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              minWidth: "250px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  sx={{
                    color: "grey.A6f",
                    position: "relative",
                    top: "2px",
                    minWidth: "20px",
                  }}
                >
                  {row.channel.icon}
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  {row.channel.name}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center">
                <Checkbox
                  sx={{
                    color: "grey.A6f",
                    "& .MuiSvgIcon-root": { fontSize: 14 }, // Size of the checkbox
                    "&.Mui-checked": {
                      color: "grey.A6f", // Tick color when checked
                    },
                  }}
                />
                <ExpandMore sx={{ fontSize: "14px", color: "grey.A6f" }} />
              </Stack>
            </Stack>
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.sales !== 0 ? `${row.sales}` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.traffic !== 0 ? `${row.traffic}` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.views !== 0 ? `${row.views}%` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.ctr !== 0 ? `${row.ctr}%` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.leads !== 0 ? `${row.cpl}` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.cr !== 0 ? `${row.cr}%` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.expenses !== 0 ? `${row.expenses} $` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.cpc !== 0 ? `${row.cpc} $` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.cpl !== 0 ? `${row.cpl} $` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.crToSales !== 0 ? `${row.crToSales}%` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.profit !== 0 ? `${row.profit} $` : "--"}
          </TableCell>

          <TableCell
            sx={{
              borderRight: "1px solid #6F6F761A",
              fontSize: "12px",
            }}
          >
            {row.roi !== 0 ? `${row.roi}%` : "--"}
          </TableCell>

          <TableCell sx={{ fontSize: "12px" }}>
            {row.romi !== 0 ? `${row.romi}%` : "--"}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TablesBody;
