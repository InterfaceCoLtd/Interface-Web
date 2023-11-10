import PlusMinusButton from "./PlusMinusButton";

const PlanCard: React.FC = () => {
  return (
    <div className="PlanCard">
      <div className="PlanCard-time">D-12</div>
      <div className="PlanCard-wrapper">
        <div className="PlanCard-title">개강총회</div>
        <PlusMinusButton type="plus" color="purple" />
      </div>
      <div className="PlanCard-period"> 23/09/01 오후 6:30 </div>
    </div>
  );
};

export default PlanCard;
