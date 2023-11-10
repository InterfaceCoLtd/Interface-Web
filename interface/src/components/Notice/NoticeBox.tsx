import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import VoteBox from "./VoteBox/VoteBox";
import PlusMinusButton from "../Common/PlusMinusButton";
import PlanBox from "./PlanBox/PlanBox";
import { useContext, createContext, useState, useEffect } from "react";
import apiGetVotes from "../../utils/apiGetVotes";

const NoticeBox: React.FC = () => {
  const [votePlanTab, setVotePlanTab] = useState(0);

  return (
    <div className="NoticeBox">
      <div className="notice-left">
        <textarea
          className="notice-title-input"
          placeholder="공지사항 제목"
          spellCheck="false"
        />
        <div className="notice-sub-title">공지사항 설명</div>
        <textarea
          className="notice-content-input"
          placeholder="여기에 공지사항의 내용을 적어주세요."
          spellCheck="false"
        />
        {/* ------------------------------------ */}
        <div className="notice-sub-title">투표 선택</div>
        <div className="select-box">
          <PlusMinusButton
            type="plus"
            color="white"
            onClick={() => {
              votePlanTab == 1 ? setVotePlanTab(0) : setVotePlanTab(1);
            }}
          />
        </div>
        <div className="notice-sub-title">일정 선택</div>
        <div className="select-box">
          <PlusMinusButton
            type="plus"
            color="purple"
            onClick={() => {
              votePlanTab == 2 ? setVotePlanTab(0) : setVotePlanTab(2);
            }}
          />
        </div>
        <div className="complete-button">작성 완료</div>
      </div>
      <div
        className={`notice-right ${votePlanTab == 1 && "voteTab"} ${
          votePlanTab == 2 && "planTab"
        }`}
      >
        {votePlanTab == 1 && <VoteBox />}
        {votePlanTab == 2 && <PlanBox />}
      </div>
    </div>
  );
};

export default NoticeBox;
