import { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import SelectMonthBox from "./SelectMonthBox";
import { PlanType } from "../../../types/type";
import apiGetPlans from "../../../utils/apiGetPlans";

interface PlanBoxProps {
  plansData: PlanType[];
  changePlusPlan: (item: PlanType) => void;
  selectedMonth: Date;
  setSelectedMonth: React.Dispatch<React.SetStateAction<Date>>;
}

const PlanBox: React.FC<PlanBoxProps> = ({
  plansData,
  changePlusPlan,
  selectedMonth,
  setSelectedMonth,
}) => {
  return (
    <div className="PlanBox">
      <div className="notice-sub-title">일정 선택</div>
      <SelectMonthBox
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      {plansData.map((it, idx) => (
        <PlanCard
          key={idx}
          planData={it}
          type={"plus"}
          setPlan={changePlusPlan}
        />
      ))}
    </div>
  );
};

export default PlanBox;
