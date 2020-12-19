import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import "../Components/css/styles.css";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  width: 73%;
  height: 140px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: transform 0.2s;
  color: inherit;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
`;

export default ({ gubunEn, gubun, incDec, localOccCnt, overFlowCnt }) => {
  return (
    <Container>
      <Router>
        <Link to={`/detail/${gubunEn}`} style={{ textDecoration: "none" }}>
          <span className="card__title">{gubun}</span>
          <div className="card__figure">
            <div className="confirmed">
              <span className="figure-title">확진자</span>
              <div className="figure-num" id="nationFigure">
                +{incDec}
              </div>
            </div>
            <div className="card__bottom">
              <div className="confirmed">
                <span className="figure-title">지역 발생</span>
                <span className="figure-num">{localOccCnt}</span>
              </div>
              <div className="confirmed">
                <span className="figure-title">해외 유입</span>
                <span className="figure-num">{overFlowCnt}</span>
              </div>
            </div>
          </div>
        </Link>
      </Router>
    </Container>
  );
};
