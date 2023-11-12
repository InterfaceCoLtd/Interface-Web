import { PlanType } from "../../../types/type";
import PlusMinusButton from "../../Common/PlusMinusButton";

interface PlanCardPorps {
  setPlan: (item: PlanType) => void;
  planData: PlanType;
  type: string;
}

const PlanCard: React.FC<PlanCardPorps> = ({ setPlan, planData, type }) => {
  return (
    <div className="PlanCard">
      <div className="PlanCard-time">{planData.type}</div>
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
      <div className="PlanCard-period"> {planData.startDate} </div>
    </div>
  );
};

export default PlanCard;
