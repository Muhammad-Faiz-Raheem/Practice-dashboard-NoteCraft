import { HelpOutline, SettingsOutlined } from "@mui/icons-material";
import { TableCell, TableHead, TableRow } from "@mui/material";

const columnHeaders = [
  "Channels",
  "Sales",
  "Traffic",
  "Views",
  "CTR",
  "Leads",
  "CR",
  "Expenses",
  "CPC",
  "CPL",
  "CR to Sales",
  "Profit",
  "ROI",
  "ROMI",
];

function Header() {
  return (
    <TableHead>
      <TableRow>
        {columnHeaders.map((header, index) => (
          <TableCell
            key={index}
            sx={{
              paddingLeft: header === "Channels" ? "40px" : "",
              minWidth: "120px",
              borderBottom: "none", // Remove divider line from header row
              fontWeight: "700",
              fontSize: "12px",
              borderRight:
                index < columnHeaders.length - 1
                  ? "1px solid #6F6F761A"
                  : "none",
            }}
          >
            {header}
            {header === "Channels" ? (
              <SettingsOutlined
                sx={{
                  fontSize: "14px",
                  color: "grey.A6f",
                  position: "relative",
                  top: "1px",
                  left: "5px",
                }}
              />
            ) : (
              <HelpOutline
                sx={{
                  fontSize: "8px",
                  color: "grey.A6f",
                  position: "relative",
                  top: "-5px",
                }}
              />
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default Header;
