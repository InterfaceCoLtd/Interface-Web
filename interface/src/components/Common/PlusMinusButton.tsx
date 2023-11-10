import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

interface PlusMinusButtonProps {
  type: string;
  color: string;
}
const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({ type, color }) => {
  var icon = type == "plus" ? faPlus : faMinus;
  var iconColor = color == "white" ? "#DEDEDE" : "#EFEDFF";
  return (
    <div className={`Plus-minus-button ${color}-button`}>
      <FontAwesomeIcon icon={icon} style={{ color: iconColor, fontSize: 13 }} />
    </div>
  );
};

export default PlusMinusButton;
