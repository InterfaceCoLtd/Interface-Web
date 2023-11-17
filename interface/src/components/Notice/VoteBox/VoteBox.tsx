import VoteCard from "./VoteCard";
import apiGetVotes from "../../../utils/apiGetVotes";
import { useEffect } from "react";
import { VoteType } from "../../../types/type";

interface VoteBoxProps {
  votesData: VoteType[];
  changePlusVote: (item: VoteType) => void;
}

const VoteBox: React.FC<VoteBoxProps> = ({ votesData, changePlusVote }) => {
  return (
    <div className="VoteBox">
      <div className="notice-sub-title">투표선택</div>
      {votesData.map((it, idx) => (
        <VoteCard
          key={idx}
          voteData={it}
          changeSelectedVote={changePlusVote}
          type={"plus"}
        />
      ))}
    </div>
  );
};

export default VoteBox;
