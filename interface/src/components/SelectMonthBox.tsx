import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MonthButton from "./MonthButton";

const SelectMonthBox: React.FC = () => {
  const [month, setMonth] = useState(new Date());//월 목록 첫번째 
  const [selectedMonth, setSelectedMonth] = useState();//선택된 날짜


  return (
    <div className={"SelectMonthBox"}>
      <FontAwesomeIcon
        className="month-arrow"
        icon={faChevronLeft}
        onClick={() => setMonth(month - 1)}
      />

      <div className="month-box">
        <MonthButton month={((month.getMonth() + 0) % 12) + 1} onClick={(){setSelectedMonth()}}/>
        <MonthButton month={((month.getMonth() + 1) % 12) + 1} />
        <MonthButton month={((month.getMonth() + 2) % 12) + 1} />
        <MonthButton month={((month.getMonth() + 3) % 12) + 1} />
      </div>

      <FontAwesomeIcon
        className="month-arrow"
        icon={faChevronRight}
        onClick={() => setMonth(month + 1)}
      />
    </div>
  );
};
export default SelectMonthBox;
