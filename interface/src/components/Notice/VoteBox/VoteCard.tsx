import { useEffect, useState } from "react";
import PlusMinusButton from "../../Common/PlusMinusButton";
import { VoteType } from "../../../types/type";

interface VoteCardProps {
  voteData: VoteType;
  changeSelectedVote: (item: VoteType) => void;
  type: string;
}

const VoteCard: React.FC<VoteCardProps> = ({
  voteData,
  changeSelectedVote,
  type,
}) => {
  const [remainDate, setRemainDate] = useState(calcRemainDate());
  const startDate = new Date(voteData.startDate);
  const endDate = new Date(voteData.endDate);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainDate(calcRemainDate());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function calcRemainDate() {
    const endDate = new Date(voteData.endDate);
    const currentDate = new Date();
    return new Date(+endDate - +currentDate);
  }

  return (
    <div className="VoteCard">
      <div className="voteCard-people">
        <img src={process.env.PUBLIC_URL + `/assets/people.svg`} />
        <span className="headCount">{voteData.total} </span>
      </div>
      <div className="voteCard-time">
        남은시간
        {`  ${remainDate.getDate()}일 ${remainDate.getHours()}시간 ${remainDate.getMinutes()}분 ${remainDate.getSeconds()}초`}
      </div>
      <div className="voteCard-wrapper">
        <div className="voteCard-title"> {voteData.subject}</div>
        <PlusMinusButton
          type={type}
          color="purple"
          onClick={() => {
            changeSelectedVote(voteData);
          }}
        />
      </div>
      <div className="voteCard-period">
        {startDate.getFullYear() % 100}/{startDate.getMonth() + 1}/
        {startDate.getDate()} ~ {endDate.getFullYear() % 100}/
        {endDate.getMonth() + 1}/{endDate.getDate()}
      </div>
    </div>
  );
};

export default VoteCard;
