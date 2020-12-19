import React from "react";
import Nav from "../Components/Nav";
import "../Components/css/styles.css";
import Slider from "../Components/Slider";

function Info() {
  return (
    <div className="home">
      <Nav />

      <main className="main infoMain">
        <div className="coronaInfo">
          <div className="questions">
            <span className="question">1️⃣ 코로나-19는 무엇인가요?</span>
            <div className="answer">
              <p>
                중국 우한에서 발생한 폐렴은 신종 코로나 바이러스인 ‘2019-nCoV'
                가 원인으로 알려졌습니다. 이 신종 바이러스는 2019년 말 처음 인체
                감염이 확인됐다는 의미에서 '코로나-19'로 명명되었습니다.
                지금까지 코로나 바이러스는 단 여섯 종만이 사람에게 감염되는
                것으로 알려져 있었으나 이번 중국 우한에서 발생한 바이러스는
                알려진 코로나 바이러스와는 성질이 달라 신종 코로나 바이러스로
                분류됐습니다.
              </p>
              <p>
                코로나 바이러스는 사람이나 동물에서 호흡기 질환을 일으키는
                바이러스로 감기를 일으키는 원인 바이러스 중 하나입니다. 이
                바이러스는 현미경으로 관찰했을 때 코로나(원 둘레에 방사형으로
                빛이 퍼지는 형태) 모양이라서 붙여진 이름입니다. 2003년 사스(중증
                급성 호흡기 증후군)와 2015년 메르스(중동 호흡기 증후군)가 이
                코로나 바이러스로 인한 것이었습니다.
              </p>
            </div>
            <span
              className="source"
              onClick={() =>
                window.open(
                  "http://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=33922",
                  "_blank"
                )
              }
            >
              출처
            </span>
          </div>
          <div className="questions">
            <span className="question">2️⃣ 코로나-19 증상은 무엇인가요?</span>
            <div className="answer">
              <p>
                코로나19 감염 시의 증상은 사람마다 다릅니다. 대부분의 감염자가
                경증에서 중증 수준의 증상을 보이며 입원 없이 회복합니다.
              </p>
              <p>
                공통적인 증상은 다음과 같습니다. <br></br>
                <br></br>- 발열 <br></br>- 마른기침 <br></br>- 피로감 <br></br>
                <br></br>
                드물지만 다음과 같은 증상이 나타날 수도 있습니다. <br></br>
                <br></br>- 몸살 <br></br>- 인후통<br></br>- 설사<br></br>-
                결막염<br></br>- 두통<br></br>- 미각 또는 후각 상실<br></br>-
                피부 발진, 손가락 또는 발가락 변색<br></br>
              </p>
              <p>
                심각한 증상은 다음과 같습니다. <br></br>
                <br></br>- 호흡 곤란 또는 숨 가쁨<br></br>- 가슴 통증 또는
                압박감<br></br>- 언어 또는 운동 장애<br></br>
              </p>
              <p>
                심각한 증상이 있다면 즉시 의료진의 도움을 받으세요. 의사를 보러
                가거나 의료기관을 방문하기 전에 항상 미리 연락을 취하세요.{" "}
                <br></br>
                <br></br>
                다른 건강상 불편이 없는 경증 환자는 자택에서 증상을 관리해야
                합니다.<br></br>
                <br></br>
                바이러스 감염 후 증상이 나타날 때까지 평균 5~6일이 걸리지만 최대
                14일이 소요될 수도 있습니다.
              </p>
            </div>
            <span
              className="source"
              onClick={() =>
                window.open(
                  "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms",
                  "_blank"
                )
              }
            >
              출처
            </span>
          </div>
          <div className="questions">
            <span className="question">
              3️⃣ 코로나-19 예방방법은 무엇인가요?
            </span>
            <div className="answer">
              <p>
                ✔ 백신 없음 <br></br>
                <br></br>✔ 올바른 손씻기 <br></br>- 흐르는 물에 비누로 30초 이상
                꼼꼼하게 손씻기<br></br>- 특히, 외출 후, 배변 후, 식사 전·후,
                기저귀 교체 전·후, 코를 풀거나 기침, 재채기 후 등에는 반드시
                실시 <br></br>
                <br></br>✔ 기침 예절 준수 <br></br>- 기침할 때는 휴지나 옷소매
                위쪽으로 입과 코를 가리고 하기 <br></br>- 호흡기 증상이 있는
                경우 마스크 착용<br></br>
                <br></br>✔ 씻지 않은 손으로 눈, 코, 입 만지지 않기 <br></br>✔
                주위 환경을 자주 소독하고 환기하기 <br></br>
              </p>
            </div>
            <span
              className="source"
              onClick={() =>
                window.open(
                  "http://ncov.mohw.go.kr/baroView.do?brdId=4&brdGubun=41",
                  "_blank"
                )
              }
            >
              출처
            </span>
          </div>
          <div className="questions">
            <span className="question">4️⃣ 사회적 거리두기</span>
            <div className="answer">
              <p></p>
              <div>
                <Slider />
              </div>
            </div>
            <span
              className="source"
              onClick={() =>
                window.open(
                  "https://m.post.naver.com/viewer/postView.nhn?volumeNo=29861447&memberNo=31572221",
                  "_blank"
                )
              }
            >
              출처
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Info;
