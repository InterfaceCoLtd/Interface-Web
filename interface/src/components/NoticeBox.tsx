const NoticeBox: React.FC = () => {
  return (
    <div className="NoticeBox">
      <div className="notice-left">
        <textarea className="notice-title-input" placeholder="공지사항 제목" />
        <div className="notice-sub-title">공지사항 설명</div>
        <textarea
          className="notice-content-input"
          placeholder="여기에 공지사항의 내용을 적어주세요."
        />
        {/* ------------------------------------ */}
        <div className="notice-sub-title">투표 선택</div>
        <div className="select-box">
          <div className="plus-button"></div>
        </div>
        <div className="notice-sub-title">일정 선택</div>
        <div className="select-box"></div>
      </div>
      <div className="notice-right"></div>
    </div>
  );
};

export default NoticeBox;
