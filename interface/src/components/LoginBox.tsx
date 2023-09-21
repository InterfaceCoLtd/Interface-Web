const LoginBox: React.FC = () => {
  return (
    <div className="LoginBox">
      <p className="id-pw-input-label id-pw-input-label-1">아이디</p>
      <input
        className="id-pw-input-box id-pw-input-box-1"
        type="text"
        placeholder="아이디를 입력하세요"
      />
      <p className="id-pw-input-label id-pw-input-label-2">비밀번호</p>
      <input
        className="id-pw-input-box id-pw-input-box-2"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <button className="login-btn">로그인</button>
    </div>
  );
};

export default LoginBox;
