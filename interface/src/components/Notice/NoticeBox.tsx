import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import VoteBox from "./VoteBox/VoteBox";
import PlusMinusButton from "../Common/PlusMinusButton";
import PlanBox from "./PlanBox/PlanBox";
const NoticeBox: React.FC = () => {
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
          <PlusMinusButton type="plus" color="white" />
        </div>
        <div className="notice-sub-title">일정 선택</div>
        <div className="select-box">
          <PlusMinusButton type="plus" color="purple" />
        </div>
        <div className="complete-button">작성 완료</div>
      </div>
      <div className="notice-right">
        <VoteBox />
        <PlanBox />
      </div>
    </div>
  );
};

export default NoticeBox;
