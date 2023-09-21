import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

interface HeaderProps {
  // 정의해야 할 프롭스 (props)가 있다면 여기에 추가
}

const Header: React.FC<HeaderProps> = () => {
  // const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="Header">
      <div className="headerLeft">
        <Link to={"/"}>
          <img
            className="logo"
            alt=""
            src={process.env.PUBLIC_URL + `/assets/인페 로고-04.png`}
            width="200px"
          ></img>
        </Link>
      </div>
      <div className="headerCenter">
        <Link className="cateLink" to={"/"}>
          인터페이스를 소개합니다!
        </Link>
        <Link className="cateLink" to={"/"}>
          소모임
        </Link>
        <Link className="cateLink" to={"/"}>
          디스코드 바로가기
        </Link>
      </div>

      <div className="headerRight">
        {sessionStorage.getItem("token") ? (
          <span>
            <Link className="cateLink" to={"/"}>
              로그아웃
            </Link>
          </span>
        ) : (
          <Link className="cateLink" to={"/Login"}>
            로그인
          </Link>
        )}
        <div className="bar"></div>

        <Link className="cateLink" to={"/"}>
          회원가입
        </Link>
      </div>
      {/* {<Sidebar toggle={toggle} setToggle={setToggle} />} */}
    </div>
  );
};

export default Header;
