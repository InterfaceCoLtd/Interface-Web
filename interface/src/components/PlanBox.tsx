import PlanCard from "./PlanCard";
import SelectMonthBox from "./SelectMonthBox";

const PlanBox: React.FC = () => {
  return (
    <div className="PlanBox">
      <div className="notice-sub-title">일정 선택</div>
      <SelectMonthBox />

      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
    </div>
  );
};

export default PlanBox;
