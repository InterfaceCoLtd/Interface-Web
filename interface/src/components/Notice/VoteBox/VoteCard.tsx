import PlusMinusButton from "../../Common/PlusMinusButton";

const VoteCard: React.FC = () => {
  return (
    <div className="VoteCard">
      <div className="voteCard-people">
        <img src={process.env.PUBLIC_URL + `/assets/people.svg`} />
        <span className="headCount">10/30 </span>
      </div>
      <div className="voteCard-time">1일 2시간 31분 35초</div>
      <div className="voteCard-wrapper">
        <div className="voteCard-title"> 2023 가을엠티 수요조사</div>
        <PlusMinusButton type="plus" color="purple" />
      </div>
      <div className="voteCard-period">23/09/01 ~ 23/09/20 </div>
    </div>
  );
};

export default VoteCard;
