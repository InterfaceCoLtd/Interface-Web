import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const userToken = sessionStorage.getItem("userToken");

  return (
    <div className="Header">
      <div className="headerLeft">
        <Link to={"/"}>
          <img
            className="logo"
            alt=""
            src={process.env.PUBLIC_URL + `/assets/interface_logo.png`}
          ></img>
        </Link>
      </div>

      {userToken ? (
        <div className="headerCenter">
          <Link className="cateLink" to={"/"}>
            유저 정보
          </Link>
          <Link className="cateLink" to={"/notice"}>
            공지사항 작성
          </Link>
          <div className="headerRight">
            <Link
              className="cateLink"
              to={"/"}
              onClick={() => {
                sessionStorage.removeItem("userToken");
              }}
            >
              로그아웃
            </Link>
          </div>
        </div>
      ) : (
        <div className="headerCenter">
          <a className="cateLink" href="https://forms.gle/nm9ujY77yx3EViGN9">
            37기 지원하기
          </a>
          <Link className="cateLink" to={"/"}>
            인터페이스 소개
          </Link>

          <div className="headerRight">
            <Link className="cateLink login" to={"/Login"}>
              집부로그인
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
