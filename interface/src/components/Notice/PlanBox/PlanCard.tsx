import { PlanType } from "../../../types/type";
import PlusMinusButton from "../../Common/PlusMinusButton";

interface PlanCardPorps {
  setPlan: (item: PlanType) => void;
  planData: PlanType;
  type: string;
}

const PlanCard: React.FC<PlanCardPorps> = ({ setPlan, planData, type }) => {
  const startDate = new Date(planData.startDate);
  const today = new Date();
  const dDay = today.getDate() - startDate.getDate();
  return (
    <div className="PlanCard">
      <div className="PlanCard-time">D{dDay < 0 ? dDay : "+" + dDay}</div>
      <div className="PlanCard-wrapper">
        <div className="PlanCard-title">{planData.title}</div>
        <PlusMinusButton
          type={type}
          color="purple"
          onClick={() => {
            setPlan(planData);
          }}
        />
      </div>
      <div className="PlanCard-period">
        {startDate.getFullYear() % 100}/{startDate.getMonth() + 1}/
        {startDate.getDate()} {startDate.getHours() > 12 ? "오후 " : "오전 "}
        {(startDate.getHours() % 12).toString().padStart(2, "0")}:
        {startDate.getMinutes().toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default PlanCard;
