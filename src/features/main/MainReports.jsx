import { useMediaQuery, useTheme } from "@mui/material";
import Reports from "../../components/reports/Reports";

function MainReports() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isXSmUp = useMediaQuery(theme.breakpoints.up("xs"));

  return (
    <div>
      <Reports isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
    </div>
  );
}

export default MainReports;
