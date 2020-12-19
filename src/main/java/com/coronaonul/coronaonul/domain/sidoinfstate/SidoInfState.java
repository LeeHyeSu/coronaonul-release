package com.coronaonul.coronaonul.domain.sidoinfstate;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity
public class SidoInfState {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stdDay;          // 기준일자
    private String gubun;           // 시도명(한글)
    private String gubunEn;         // 시도명(영어)
    private String deathCnt;        // 사망자 수
    private String defCnt;          // 누적 확진자 수
    private String incDec;          // 전일대비 증감 수(오늘 확진자수)
    private String isolClearCnt;    // 격리 해제 수
    private String isolIngCnt;      // 격리중 환자수
    private String localOccCnt;     // 지역발생 수
    private String overFlowCnt;     // 해외유입 수

    @Builder
    public SidoInfState(String stdDay, String gubun, String gubunEn, String deathCnt, String defCnt, String incDec, String isolClearCnt, String isolIngCnt, String localOccCnt, String overFlowCnt) {
        this.stdDay = stdDay;
        this.gubun = gubun;
        this.gubunEn = gubunEn;
        this.deathCnt = deathCnt;
        this.defCnt = defCnt;
        this.incDec = incDec;
        this.isolClearCnt = isolClearCnt;
        this.isolIngCnt = isolIngCnt;
        this.localOccCnt = localOccCnt;
        this.overFlowCnt = overFlowCnt;
    }
}
