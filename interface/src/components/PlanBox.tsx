import PlanCard from "./PlanCard";
import VoteCard from "./VoteCard";

const PlanBox: React.FC = () => {
  return (
    <div className="PlanBox">
      <div className="notice-sub-title">일정 선택</div>

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
