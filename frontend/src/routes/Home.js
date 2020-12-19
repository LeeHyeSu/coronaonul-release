import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import NationCard from "../Components/NationCard";
import TotalCard from "../Components/TotalCard";
import axios from "axios";
import "../Components/css/styles.css";
import styled from "styled-components";

const NationCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  width: 100%;
  position: relative;
  top: 100px;
  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    top: 300px;
  }
`;

const Home = () => {
  const [data, loading] = useState([]);
  useEffect(() => {
    getFigure();
  }, []);

  const getFigure = () => {
    axios
      .get("http://localhost:8080/coronaonul")
      .then(({ data }) => {
        loading(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="home">
      <Nav />
      <main className="main">
        <div className="notice">
          <img
            src="https://img.echosting.cafe24.com/skin/base/common/ico_required.gif"
            alt="필수"
          />
          모든 데이터는 오전 10시에 업데이트 됩니다.
        </div>
        <TotalCard />
        <NationCards>
          {data
            ?.map((d) => (
              <NationCard
                gubunEn={d.gubunEn}
                gubun={d.gubun}
                incDec={d.incDec}
                localOccCnt={d.localOccCnt}
                overFlowCnt={d.overFlowCnt}
              />
            ))
            .reverse()
            .slice(1, 19)}
        </NationCards>
      </main>
    </div>
  );
};

export default Home;
