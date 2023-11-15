import { useState } from "react";
import apiUserAuthSingIn from "../../utils/apiUsersAuthSignIn";
import { useNavigate } from "react-router-dom";

const LoginBox: React.FC = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    apiUserAuthSingIn(id, pw)
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        setErrMsg(
          "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
        );
        setId("");
        setPw("");
      });
  };

  function handleEnterPress(e: any) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  return (
    <div className="LoginBox">
      <p className="id-pw-input-label ">아이디</p>
      <input
        className="id-pw-input-box"
        type="text"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <p className="id-pw-input-label ">비밀번호</p>
      <input
        className="id-pw-input-box"
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        onKeyDown={handleEnterPress}
      />

      <div className="err-msg">{errMsg}</div>
      <button className="login-btn" onClick={handleSubmit}>
        로그인
      </button>
    </div>
  );
};

export default LoginBox;
