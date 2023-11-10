import { useEffect, useState } from "react";
import PlusMinusButton from "../../Common/PlusMinusButton";

interface VoteCardProps {
  voteData: {
    subjectId: number;
    subject: string;
    startDate: string;
    endDate: string;
    total: number;
  };
}

const VoteCard: React.FC<VoteCardProps> = ({ voteData }) => {
  const [remainDate, setRemainDate] = useState(calcRemainDate());

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
        <PlusMinusButton type="plus" color="purple" />
      </div>
      <div className="voteCard-period">
        {voteData.startDate} ~ {voteData.endDate}
      </div>
    </div>
  );
};

export default VoteCard;
