import Header from "../components/Header";
import FloatingCircles from "../components/FloatingCircles";
import NoticeBox from "../components/NoticeBox";

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
