import FloatingCircles from "../components/Common/FloatingCircles";
import Header from "../components/Common/Header";
import LoginBox from "../components/Login/LoginBox";

const Login: React.FC = () => {
  return (
    <div className="Login">
      <Header />
      <FloatingCircles />
      <img
        className="logo3"
        src={process.env.PUBLIC_URL + `/assets/interface_logo-03.svg`}
      />
      <LoginBox />

      <div className="signup-wrapper">
        <div className="signup-text">아이디 / 비밀번호를 잊으셨나요?</div>
        <div className="bar"></div>
        <div className="signup-text">회원가입</div>
      </div>
    </div>
  );
};

export default Login;
