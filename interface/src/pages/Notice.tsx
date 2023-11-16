import Header from "../components/Common/Header";
import FloatingCircles from "../components/Common/FloatingCircles";
import NoticeBox from "../components/Notice/NoticeBox";

const Notice: React.FC = () => {
  return (
    <div className="Notice">
      <Header />
      <FloatingCircles />
      <NoticeBox />
    </div>
  );
};

export default Notice;
