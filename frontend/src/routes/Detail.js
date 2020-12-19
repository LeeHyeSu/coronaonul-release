import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import NationGraph from "../Components/NationGraph";
import "../Components/css/styles.css";

function Detail() {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  const { gubunEn } = useParams();
  const [nationData, setNationData] = useState([]);
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    getNationData();
    getWeekData();
  }, []);

  const getNationData = () => {
    axios
      .get(`http://localhost:8080/coronaonul/${gubunEn}`)
      .then(({ data }) => {
        setNationData(data.sidoInfState);
      })
      .catch((err) => alert(err));
  };

  const getWeekData = () => {
    axios
      .get(`http://localhost:8080/coronaonul/${gubunEn}`)
      .then(({ data }) => {
        setWeekData(data.weekData);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="home">
      <Nav />
      <main className="detail__main">
        <div className="detail__wrap" id="detail-wrap">
          <div className="detail__header">
            <h2 className="detail__krTitle">{nationData?.gubun}</h2>
            <h2 className="detail__enTitle">
              ({nationData?.gubunEn}) 코로나-19 현황
            </h2>
          </div>
          <div className="notice" id="detail-notice">
            <img
              src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
              alt="필수"
            />
            모든 데이터는 오전 10시에 업데이트 됩니다.
          </div>
          <div className="detail__content">
            <div className="chart__left">
              <span className="graph__title">
                {nationData?.gubun} 일일 확진자 발생 추이 그래프
              </span>
              <NationGraph weekData={weekData.map((d) => d.number)} />
            </div>
            <hr className="divider"></hr>
            <div className="chart__right">
              <div className="chart-title">
                {nationData?.gubun} 코로나-19 현황
              </div>

              <div className="chart">
                <div className="chart__row">
                  <div className="chart__figure">
                    <span classNames="chart__title">누적 확진자</span>
                    <span className="figure__num confirmed">
                      {parseInt(nationData?.defCnt)
                        .toString()
                        .replace(regexp, ",")}
                    </span>
                  </div>
                  <div className="chart__figure">
                    <span classNames="chart__title">치료중</span>
                    <span className="figure__num testing">
                      {parseInt(nationData?.isolIngCnt)
                        .toString()
                        .replace(regexp, ",")}
                    </span>
                  </div>
                  <div className="chart__figure">
                    <div classNames="chart__title">퇴원</div>
                    <div className="figure__num recovered">
                      {parseInt(nationData?.isolClearCnt)
                        .toString()
                        .replace(regexp, ",")}
                    </div>
                  </div>
                  <div className="chart__figure">
                    <div classNames="chart__title">사망</div>
                    <div className="figure__num death">
                      {parseInt(nationData?.deathCnt)
                        .toString()
                        .replace(regexp, ",")}
                    </div>
                  </div>
                </div>
                <div className="chart__row">
                  <div className="chart__figure">
                    <div classNames="chart__title">오늘 확진자</div>
                    <div className="figure__num confirmed">
                      {parseInt(nationData?.incDec)
                        .toString()
                        .replace(regexp, ",")}
                    </div>
                  </div>
                  <div className="chart__figure">
                    <div classNames="chart__title">지역발생</div>
                    <div className="figure__num confirmed">
                      {parseInt(nationData?.localOccCnt)
                        .toString()
                        .replace(regexp, ",")}
                    </div>
                  </div>
                  <div className="chart__figure">
                    <div classNames="chart__title">해외유입</div>
                    <div className="figure__num confirmed">
                      {parseInt(nationData?.overFlowCnt)
                        .toString()
                        .replace(regexp, ",")}
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="more"
                onClick={() => {
                  return nationData?.gubun === "서울"
                    ? window.open(
                        "https://www.seoul.go.kr/coronaV/coronaStatus.do",
                        "_blank"
                      )
                    : nationData?.gubun === "부산"
                    ? window.open(
                        "http://www.busan.go.kr/covid19/Corona19.do",
                        "_blank"
                      )
                    : nationData?.gubun === "대구"
                    ? window.open("http://covid19.daegu.go.kr/", "_blank")
                    : nationData?.gubun === "인천"
                    ? window.open(
                        "https://www.incheon.go.kr/health/HE020409",
                        "_blank"
                      )
                    : nationData?.gubun === "광주"
                    ? window.open("https://www.gwangju.go.kr/c19/", "_blank")
                    : nationData?.gubun === "대전"
                    ? window.open(
                        "https://www.daejeon.go.kr/corona19/index.do",
                        "_blank"
                      )
                    : nationData?.gubun === "울산"
                    ? window.open("http://www.ulsan.go.kr/corona.jsp", "_blank")
                    : nationData?.gubun === "세종"
                    ? window.open(
                        "https://www.sejong.go.kr/bbs/R3273/list.do;jsessionid=TkEBjZ7uuRa9ggO9rKnMhqAgabvrRlXxModIjYh0paAI1bYfVbcUb6afegQHpm4C.Portal_WAS2_servlet_engine5?cmsNoStr=17465",
                        "_blank"
                      )
                    : nationData?.gubun === "경기"
                    ? window.open(
                        "https://www.gg.go.kr/contents/contents.do?ciIdx=1150&menuId=2909",
                        "_blank"
                      )
                    : nationData?.gubun === "강원"
                    ? window.open(
                        "http://www.provin.gangwon.kr/covid-19.html",
                        "_blank"
                      )
                    : nationData?.gubun === "충북"
                    ? window.open(
                        "http://www1.chungbuk.go.kr/covid-19/index.do",
                        "_blank"
                      )
                    : nationData?.gubun === "충남"
                    ? window.open(
                        "ttp://www.chungnam.go.kr/coronaStatus.do",
                        "_blank"
                      )
                    : nationData?.gubun === "전북"
                    ? window.open(
                        "https://www.jeonbuk.go.kr/board/list.jeonbuk?boardId=BBS_0000105&menuCd=DOM_000000110001000000&contentsSid=1219&cpath=",
                        "_blank"
                      )
                    : nationData?.gubun === "전남"
                    ? window.open(
                        "https://www.jeonnam.go.kr/coronaMainPage.do",
                        "_blank"
                      )
                    : nationData?.gubun === "경북"
                    ? window.open(
                        "http://www.gb.go.kr/Main/open_contents/section/wel/page.do?mnu_uid=5857&LARGE_CODE=360&MEDIUM_CODE=90&SMALL_CODE=10&mnu_order=2",
                        "_blank"
                      )
                    : nationData?.gubun === "경남"
                    ? window.open(
                        "http://xn--19-q81ii1knc140d892b.kr/main/main.do",
                        "_blank"
                      )
                    : nationData?.gubun === "제주"
                    ? window.open(
                        "https://www.jeju.go.kr/corona19.jsp",
                        "_blank"
                      )
                    : nationData?.gubun === "검역"
                    ? window.open("http://ncov.mohw.go.kr/", "_blank")
                    : "";
                }}
              >
                더 알아보기
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Detail;
