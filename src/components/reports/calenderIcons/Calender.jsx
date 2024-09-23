import Filters from "../../dashboard/mainDashboard/filters/Filters";

function Calender({ isMdUp, isSmUp, isXSmUp }) {
  return (
    <div>
      <Filters isMdUp={isMdUp} isSmUp={isSmUp} isXSmUp={isXSmUp} />
    </div>
  );
}

export default Calender;
