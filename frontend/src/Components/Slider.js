import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  .slick-prev:before {
    opacity: 1;
    color: black;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <>
      <Wrap>
        <Slider {...settings}>
          <div>
            <img
              width="100%"
              src="https://post-phinf.pstatic.net/MjAyMDExMTdfNDgg/MDAxNjA1NTkyNDYzOTYz.mEbQlLK7LHVxLcAoEKCTJo47ostmPtMqkLjl9xu2N5Ig.HnqqMK8PAObTUqhjaUVIXx0w5GT9IXYGzzQYREwtz6Mg.PNG/%EB%B3%B4%EA%B1%B4%EB%B3%B5%EC%A7%80%EB%B6%80_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0%2B%EB%8B%A8%EA%B3%84%EB%B3%84%2B%EA%B8%B0%EC%A4%80%2B%EB%B0%8F%2B%EB%B0%A9%EC%97%AD%2B%EC%A1%B0%EC%B9%98_1.png?type=w1200"
            />
          </div>
          <div>
            <img
              width="100%"
              src="https://post-phinf.pstatic.net/MjAyMDExMTdfMjYg/MDAxNjA1NTkyNTk4MjU1.h72O9PpoH8mFPlcP1KOftC3nUHfJElvixkI5g_RyBKog.K7i1Qsw_pW9grK22707SL6e1Y9oWTfAp-tFUvZJIvfkg.PNG/%EB%B3%B4%EA%B1%B4%EB%B3%B5%EC%A7%80%EB%B6%80_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0%2B%EB%8B%A8%EA%B3%84%EB%B3%84%2B%EA%B8%B0%EC%A4%80%2B%EB%B0%8F%2B%EB%B0%A9%EC%97%AD%2B%EC%A1%B0%EC%B9%98_2.png?type=w1200"
            />
          </div>
          <div>
            <img
              width="100%"
              src="https://post-phinf.pstatic.net/MjAyMDExMTdfMjg4/MDAxNjA1NTkyODM0NjMz.TV0YgACr0j-13CMZsRap8ooHhQ7mYvZN5k48ILRgJkgg.05XypIa4LBHQG2ZRB___QuEjUQb1Keb-lxTzdCImiQgg.PNG/%EB%B3%B4%EA%B1%B4%EB%B3%B5%EC%A7%80%EB%B6%80_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0%2B%EB%8B%A8%EA%B3%84%EB%B3%84%2B%EA%B8%B0%EC%A4%80%2B%EB%B0%8F%2B%EB%B0%A9%EC%97%AD%2B%EC%A1%B0%EC%B9%98_3.png?type=w1200"
            />
          </div>
        </Slider>
      </Wrap>
    </>
  );
};
