import VoteCard from "./VoteCard";
import apiGetVotes from "../../../utils/apiGetVotes";
import { useEffect } from "react";

interface SubjectData {
  subjectId: number;
  subject: string;
  startDate: string;
  endDate: string;
  total: number;
}
interface VoteBoxProps {
  votesData: SubjectData[];
}

const VoteBox: React.FC<VoteBoxProps> = ({ votesData }) => {
  return (
    <div className="VoteBox">
      <div className="notice-sub-title">투표선택</div>
      {votesData.map((it, idx) => (
        <VoteCard voteData={it} />
      ))}
    </div>
  );
};

export default VoteBox;
