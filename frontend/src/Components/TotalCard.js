import React, { useState, useEffect } from "react";
import axios from "axios";
import TotalGraph from "./TotalGraph";
import "../Components/css/styles.css";

export default () => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  const [data, loading] = useState([]);
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    getData();
    getTotalData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/coronaonul")
      .then(({ data }) => {
        loading(data);
      })
      .catch((err) => alert(err));
  };

  const getTotalData = () => {
    axios
      .get("http://localhost:8080/coronaonul/Total")
      .then(({ data }) => {
        setTotalData(data.weekData);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="detail__wrap">
      <div className="detail__content">
        <div className="chart__left">
          <span className="graph__title">
            전국 일일 확진자 발생 추이 그래프
          </span>
          <TotalGraph weekData={totalData.map((d) => d.number)} />
        </div>
        <hr className="divider"></hr>
        <div className="chart__right">
          <div className="chart-title">전국 코로나 현황</div>
          <div className="chart">
            {data
              ?.map((d) => (
                <>
                  <div className="chart__row">
                    <div className="chart__figure">
                      <span classNames="chart__title">누적 확진자</span>
                      <span className="figure__num confirmed">
                        {parseInt(d.defCnt).toString().replace(regexp, ",")}
                      </span>
                    </div>
                    <div className="chart__figure">
                      <span classNames="chart__title">치료중</span>
                      <span className="figure__num testing">
                        {parseInt(d.isolIngCnt).toString().replace(regexp, ",")}
                      </span>
                    </div>
                    <div className="chart__figure">
                      <div classNames="chart__title">퇴원</div>
                      <div className="figure__num recovered">
                        {parseInt(d.isolClearCnt)
                          .toString()
                          .replace(regexp, ",")}
                      </div>
                    </div>
                    <div className="chart__figure">
                      <div classNames="chart__title">사망</div>
                      <div className="figure__num death">
                        {parseInt(d.deathCnt).toString().replace(regexp, ",")}
                      </div>
                    </div>
                  </div>
                  <div className="chart__row">
                    <div className="chart__figure">
                      <div classNames="chart__title">오늘 확진자</div>
                      <div className="figure__num confirmed">
                        {parseInt(d.incDec).toString().replace(regexp, ",")}
                      </div>
                    </div>
                    <div className="chart__figure">
                      <div classNames="chart__title">지역발생</div>
                      <div className="figure__num confirmed">
                        {parseInt(d.localOccCnt)
                          .toString()
                          .replace(regexp, ",")}
                      </div>
                    </div>
                    <div className="chart__figure">
                      <div classNames="chart__title">해외유입</div>
                      <div className="figure__num confirmed">
                        {parseInt(d.overFlowCnt)
                          .toString()
                          .replace(regexp, ",")}
                      </div>
                    </div>
                  </div>
                </>
              ))
              .reverse()
              .slice(0, 1)}
          </div>
          <span
            className="more"
            onClick={() => window.open("http://ncov.mohw.go.kr/", "_blank")}
          >
            더 알아보기
          </span>
        </div>
      </div>
    </div>
  );
};
