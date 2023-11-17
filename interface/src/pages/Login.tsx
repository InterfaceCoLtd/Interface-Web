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
    </div>
  );
};

export default Login;
