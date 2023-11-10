import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SelectMonthBox: React.FC = () => {
  const [firstMonth, setFirstMonth] = useState(new Date()); //월 목록 첫번째
  const [selectedMonth, setSelectedMonth] = useState(new Date()); //선택된 날짜

  const monthNum = [0, 1, 2, 3];
  const handleMonth = (it: number) => {
    let tmp = new Date(firstMonth);
    setSelectedMonth(new Date(tmp.setMonth(tmp.getMonth() + it)));
  };

  const compareDay = (it: number) => {
    let tmp = new Date(firstMonth);
    tmp = new Date(tmp.setMonth(tmp.getMonth() + it));
    return (
      selectedMonth.getMonth() === tmp.getMonth() &&
      selectedMonth.getFullYear() === tmp.getFullYear()
    );
  };

  return (
    <div className={"SelectMonthBox"}>
      <FontAwesomeIcon
        className="month-arrow"
        icon={faChevronLeft}
        onClick={() =>
          setFirstMonth(
            new Date(firstMonth.setMonth(firstMonth.getMonth() - 1))
          )
        }
      />

      <div className={`month-box`}>
        {monthNum.map((it) => {
          return (
            <div
              className={`MonthButton ${compareDay(it)}`}
              onClick={() => {
                handleMonth(it);
              }}
            >
              {((firstMonth.getMonth() + it) % 12) + 1}월
            </div>
          );
        })}
      </div>

      <FontAwesomeIcon
        className="month-arrow"
        icon={faChevronRight}
        onClick={() =>
          setFirstMonth(
            new Date(firstMonth.setMonth(firstMonth.getMonth() + 1))
          )
        }
      />
    </div>
  );
};
export default SelectMonthBox;
