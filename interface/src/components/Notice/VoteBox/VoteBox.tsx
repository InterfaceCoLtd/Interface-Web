import VoteCard from "./VoteCard";
import apiGetVotes from "../../../utils/apiGetVotes";
import { useEffect } from "react";

const VoteBox: React.FC = () => {
  useEffect(() => {
    apiGetVotes();
  }, []);

  return (
    <div className="VoteBox">
      <div className="notice-sub-title">투표선택</div>

      <VoteCard />
      <VoteCard />
      <VoteCard />
      <VoteCard />
      <VoteCard />
      <VoteCard />
      <VoteCard />
      <VoteCard />
      <VoteCard />
    </div>
  );
};

export default VoteBox;
