import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MonthButton from "./MonthButton";

const SelectMonthBox: React.FC = () => {
  const [month, setFirstMonth] = useState(new Date());//월 목록 첫번째 
  const [selectedMonth, setSelectedMonth] = useState(new Date());//선택된 날짜
console.log("selectedMonth: "+selectedMonth);
console.log("Month: "+new Date(month.getMonth()+2));


  return (
    <div className={"SelectMonthBox"}>
      <FontAwesomeIcon
        className="month-arrow"
        icon={faChevronLeft}
        onClick={() => setFirstMonth(new Date(month.setMonth(month.getMonth() - 1)))}
      />

      <div className="month-box">
        <div className="MonthButton" 
        onClick={() => {
          setSelectedMonth(new Date(month));
      }}>
        {((month.getMonth() + 0) % 12) + 1}월</div> 
        <div className="MonthButton" 
         onClick={() => {
          setSelectedMonth(new Date(month.getMonth()+2));
        }}
        >{((month.getMonth() + 1) % 12) + 1}월</div> 
        <div className="MonthButton"
        
        onClick={() => {
          setSelectedMonth(new Date(month.getMonth()+2));
        }}> {((month.getMonth() + 2) % 12) + 1}월</div>
        <div className="MonthButton "
        
        onClick={() => {
          setSelectedMonth(new Date(month.getMonth()+3));
        }}
        >{((month.getMonth() + 3) % 12) + 1}월</div>
      </div>

      <FontAwesomeIcon
        className="month-arrow"
        icon={faChevronRight}
        onClick={() => setFirstMonth(new Date(month.setMonth(month.getMonth() + 1)))}
      />
    </div>
  );
};
export default SelectMonthBox;
