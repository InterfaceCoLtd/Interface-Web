import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import FloatingCircles from "../components/Common/FloatingCircles";

const event_imgs = [
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDlfMTMy%2FMDAxNjIzMjAzNzk0ODM2.FEyMkfzKYrw-N7s5DyLE2jap16BBpvvEv52CrBUx3iUg.CuSWzmWqLlfbNvdhWZi6E3sivVS87N4KDcwge4aBig0g.JPEG.nicenice133%2F3.jpeg&type=sc960_832",
  "https://i.pinimg.com/236x/7d/64/73/7d6473ff1597973387fab055b8736f18.jpg",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDlfMTMy%2FMDAxNjIzMjAzNzk0ODM2.FEyMkfzKYrw-N7s5DyLE2jap16BBpvvEv52CrBUx3iUg.CuSWzmWqLlfbNvdhWZi6E3sivVS87N4KDcwge4aBig0g.JPEG.nicenice133%2F3.jpeg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDlfMTMy%2FMDAxNjIzMjAzNzk0ODM2.FEyMkfzKYrw-N7s5DyLE2jap16BBpvvEv52CrBUx3iUg.CuSWzmWqLlfbNvdhWZi6E3sivVS87N4KDcwge4aBig0g.JPEG.nicenice133%2F3.jpeg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDlfMTMy%2FMDAxNjIzMjAzNzk0ODM2.FEyMkfzKYrw-N7s5DyLE2jap16BBpvvEv52CrBUx3iUg.CuSWzmWqLlfbNvdhWZi6E3sivVS87N4KDcwge4aBig0g.JPEG.nicenice133%2F3.jpeg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDlfMTMy%2FMDAxNjIzMjAzNzk0ODM2.FEyMkfzKYrw-N7s5DyLE2jap16BBpvvEv52CrBUx3iUg.CuSWzmWqLlfbNvdhWZi6E3sivVS87N4KDcwge4aBig0g.JPEG.nicenice133%2F3.jpeg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDlfMTMy%2FMDAxNjIzMjAzNzk0ODM2.FEyMkfzKYrw-N7s5DyLE2jap16BBpvvEv52CrBUx3iUg.CuSWzmWqLlfbNvdhWZi6E3sivVS87N4KDcwge4aBig0g.JPEG.nicenice133%2F3.jpeg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDlfMTMy%2FMDAxNjIzMjAzNzk0ODM2.FEyMkfzKYrw-N7s5DyLE2jap16BBpvvEv52CrBUx3iUg.CuSWzmWqLlfbNvdhWZi6E3sivVS87N4KDcwge4aBig0g.JPEG.nicenice133%2F3.jpeg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDlfMTMy%2FMDAxNjIzMjAzNzk0ODM2.FEyMkfzKYrw-N7s5DyLE2jap16BBpvvEv52CrBUx3iUg.CuSWzmWqLlfbNvdhWZi6E3sivVS87N4KDcwge4aBig0g.JPEG.nicenice133%2F3.jpeg&type=sc960_832",
  "https://i.pinimg.com/236x/0d/94/03/0d9403c6e70152a3f4afc1507307bb22.jpg",
];

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const createImgArr = () => {
    const imgArr: string[][] = [];

    for (let i = 0; i < 4; i++) imgArr[i] = [];

    event_imgs.forEach((img, idx) => {
      const imgArrIdx = idx % 4;
      imgArr[imgArrIdx].push(img);
    });

    return imgArr;
  };

  return (
    <div className="Home">
      <Header />
      <FloatingCircles />
      <section className="home-section1">
        <div className="apply-box white-box">
          <img src={process.env.PUBLIC_URL + `/assets/notebook.svg`} />
          <h5 className="apply-sub-title ">중앙 학술 프로그래밍 동아리</h5>
          <h2 className="apply-title">
            <span>인터페이스</span>에서 <br />
            37기 신입부원을 모집합니다!!
          </h2>
          <button className="apply-button blue-button">지금 지원하기</button>
        </div>
        <div className={`box-wrapper ${isOpen ? "open" : ""}`}>
          <div className="box-period  white-box">
            <div className="icon">
              <img src={process.env.PUBLIC_URL + `/assets/clock.png`} />
            </div>
            <div className="title">모집 기간</div>
            <div className="content date">~3월 20일</div>
            <div className="last">
              (기간 이후에 지원 하신 분들은 신청이 반려될 수 있습니다!)
            </div>
          </div>
          <div className="box-target  white-box">
            <div className="icon">
              <img src={process.env.PUBLIC_URL + `/assets/smile.png`} />
            </div>
            <div className="title">모집 대상</div>
            <div className="content">
              인터페이스 활동에 대한 열정과 의지, <br />
              그리고 책임감이 있는 세종대학교 재학생
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="home-section2">
        <div className="bg-black">
          <div className="section2-text-box">
            <h3>
              지금까지 이런 <br />
              <span>사이버 동방</span>은 없었다!
            </h3>
            <p>
              이 서버에서는 신입회원, 정회원, 그리고 명예회원 (졸업생 및
              휴학생)이 <br />
              다양한 채널을 통해 정보를 공유하거나 소통할 수 있습니다. <br />
              <br />
              동아리 부원들의 편의를 위해 다양한 디스코드 봇들이 초대되어 있고,
              <br />
              서버 부스트를 하여 일반 디코 서버보다 좋은 화질과 오디오 품질로
              사용이 가능합니다.
            </p>
            <button className="blue-button discord-button">
              디스코드 바로가기
            </button>
          </div>
          <div className="transparent-layer"></div>

          <img
            className="discord-img"
            src={process.env.PUBLIC_URL + `/assets/discord.svg`}
          />
        </div>
      </section>

      <section className="home-section3">
        <div className="event-title">
          <div className="sub-title">중앙 학술 프로그래밍 동아리</div>
          <h3 className="title">
            <span>인터페이스</span>의 <br />
            특별한 동아리 행사
          </h3>
        </div>
        <div className="event-wrapper">
          {createImgArr().map((col, col_idx) => {
            return (
              <div className={`image-col image-col-${col_idx}`}>
                {col.map((img) => (
                  <div className="img-card">
                    <img src={img} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
