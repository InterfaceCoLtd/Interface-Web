import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import VoteBox from "./VoteBox/VoteBox";
import PlusMinusButton from "../Common/PlusMinusButton";
import PlanBox from "./PlanBox/PlanBox";
import { useContext, createContext, useState, useEffect, useRef } from "react";
import apiGetVotes from "../../utils/apiGetVotes";
import { PlanType, VoteType } from "../../types/type";
import VoteCard from "./VoteBox/VoteCard";
import PlanCard from "./PlanBox/PlanCard";
import apiGetPlans from "../../utils/apiGetPlans";
import apiPostBoards from "../../utils/apiPostBoards";
import { title } from "process";
import { useNavigate } from "react-router-dom";

const NoticeBox: React.FC = () => {
  const navigate = useNavigate();
  const [votesData, setVotesData] = useState<VoteType[]>([]);
  const [plansData, setPlansData] = useState<PlanType[]>([]);
  const [selectedVote, setSelectedVote] = useState<VoteType | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date()); //선택된 날짜
  const [votePlanTab, setVotePlanTab] = useState(0);

  // ------------------------------------------------------------------------------
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");
  const titleInputRef = useRef<HTMLTextAreaElement | null>(null);
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    apiGetPlans(selectedMonth.getMonth() + 1).then((data) => {
      setPlansData(data);
    });
  }, [selectedMonth]);

  useEffect(() => {
    if (selectedPlan !== null) {
      setPlansData((prevPlansData) =>
        prevPlansData.filter((key) => key.id !== selectedPlan.id)
      );
    }
  }, [selectedPlan]);
  const plusPlan = (item: PlanType) => {
    setSelectedPlan(item);
    if (selectedPlan != null) {
      let startDateMonth = new Date(selectedPlan.startDate).getMonth();
      if (selectedMonth.getMonth() === startDateMonth) {
        setPlansData([selectedPlan, ...plansData]);
      }
    }
  };

  const changeMinusPlan = (item: PlanType) => {
    if (selectedPlan != null) {
      let startDateMonth = new Date(selectedPlan.startDate).getMonth();
      if (selectedMonth.getMonth() === startDateMonth)
        setPlansData([selectedPlan, ...plansData]);
      setSelectedPlan(null);
    }
  };

  useEffect(() => {
    apiGetVotes().then((data) => {
      setVotesData(data);
    });
  }, []);

  const changePlusVote = (item: VoteType) => {
    // 목록에서 +눌렀을 때
    if (selectedVote != null) setVotesData([selectedVote, ...votesData]);
    setSelectedVote(item);
  };

  useEffect(() => {
    if (selectedVote !== null) {
      setVotesData((prevVotesData) =>
        prevVotesData.filter((key) => key.subjectId !== selectedVote!.subjectId)
      );
    }
  }, [selectedVote]);

  const changeMinusVote = (item: VoteType) => {
    //선택된 카드에서 -누를때
    if (selectedVote != null) setVotesData([selectedVote, ...votesData]);
    setSelectedVote(null);
  };

  const handleSubmit = () => {
    {
      // 제목이나 내용 입력 안한 경우
      if (!(noticeTitle && noticeContent)) {
        if (!noticeTitle) {
          titleInputRef.current?.focus();
        } else if (!noticeContent) {
          contentInputRef.current?.focus();
        }
        return;
      }

      apiPostBoards(
        noticeTitle,
        noticeContent,
        1, // 로그인 구현 후 userId로 수정해야 함
        selectedVote?.subjectId,
        selectedPlan?.id
      )
        .then(() => {
          setNoticeTitle("");
          setNoticeContent("");
          setSelectedVote(null);
          setSelectedPlan(null);
          setVotePlanTab(0);

          alert("공지사항 작성 완료");
          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <div className="NoticeBox">
      <div className="notice-left">
        <textarea
          className="notice-title-input"
          placeholder="공지사항 제목"
          ref={titleInputRef}
          spellCheck="false"
          value={noticeTitle}
          onChange={(e) => {
            setNoticeTitle(e.target.value);
          }}
        />
        <div className="notice-sub-title">공지사항 설명</div>
        <textarea
          className="notice-content-input"
          placeholder="여기에 공지사항의 내용을 적어주세요."
          ref={contentInputRef}
          spellCheck="false"
          value={noticeContent}
          onChange={(e) => {
            setNoticeContent(e.target.value);
          }}
        />
        <div className="notice-sub-title">투표 선택</div>

        <div className={`select-box ${selectedVote === null || "selected"}`}>
          {selectedVote == null ? (
            <PlusMinusButton
              type="plus"
              color="white"
              onClick={() => {
                votePlanTab == 1 ? setVotePlanTab(0) : setVotePlanTab(1);
              }}
            />
          ) : (
            <VoteCard
              voteData={selectedVote}
              changeSelectedVote={changeMinusVote}
              type="minus"
            />
          )}
        </div>
        <div className="notice-sub-title">일정 선택</div>
        <div className={`select-box ${selectedPlan === null || "selected"}`}>
          {selectedPlan == null ? (
            <PlusMinusButton
              type="plus"
              color="white"
              onClick={() => {
                votePlanTab == 2 ? setVotePlanTab(0) : setVotePlanTab(2);
              }}
            />
          ) : (
            <PlanCard
              setPlan={changeMinusPlan}
              planData={selectedPlan}
              type="minus"
            />
          )}
        </div>
        <div className="complete-button" onClick={handleSubmit}>
          작성 완료
        </div>
      </div>
      <div
        className={`notice-right ${votePlanTab == 1 && "voteTab"} ${
          votePlanTab == 2 && "planTab"
        }`}
      >
        {votePlanTab == 1 && (
          <VoteBox votesData={votesData} changePlusVote={changePlusVote} />
        )}
        {votePlanTab == 2 && (
          <PlanBox
            plansData={plansData}
            changePlusPlan={plusPlan}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        )}
      </div>
    </div>
  );
};

export default NoticeBox;
