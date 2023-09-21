import Header from "../components/Header";
import LoginBox from "../components/LoginBox";

const Login: React.FC = () => {
  return (
    <div className="Login">
      <Header />
      <img
        className="logo3"
        src={process.env.PUBLIC_URL + `/assets/인페 로고-03.svg`}
      />
      <LoginBox />
    </div>
  );
};

export default Login;
