package com.coronaonul.coronaonul.vo;

import com.coronaonul.coronaonul.domain.sidoinfstate.SidoInfState;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.xml.bind.annotation.XmlRootElement;

@Data
@NoArgsConstructor
@XmlRootElement(name="item")
public class SidoInfStateItemDTO {

    private String deathCnt;        // 사망자 수
    private String defCnt;          // 누적 확진자 수
    private String gubun;           // 시도명(한글)
    private String gubunEn;         // 시도명(영어)
    private String incDec;          // 전일대비 증감 수(오늘 확진자수)
    private String isolClearCnt;    // 격리 해제 수
    private String isolIngCnt;      // 격리중 환자수
    private String localOccCnt;     // 지역발생 수
    private String overFlowCnt;     // 해외유입 수
    private String stdDay;          // 기준일자

    @Builder
    public SidoInfStateItemDTO(String stdDay, String deathCnt, String defCnt, String gubun, String gubunEn, String incDec, String isolClearCnt, String isolIngCnt, String localOccCnt, String overFlowCnt) {
        this.stdDay = stdDay;
        this.deathCnt = deathCnt;
        this.defCnt = defCnt;
        this.gubun = gubun;
        this.gubunEn = gubunEn;
        this.incDec = incDec;
        this.isolClearCnt = isolClearCnt;
        this.isolIngCnt = isolIngCnt;
        this.localOccCnt = localOccCnt;
        this.overFlowCnt = overFlowCnt;
    }

    public SidoInfStateItemDTO(SidoInfState entity) {
        this.stdDay = entity.getStdDay();
        this.deathCnt = entity.getDeathCnt();
        this.defCnt = entity.getDefCnt();
        this.gubun = entity.getGubun();
        this.gubunEn = entity.getGubunEn();
        this.incDec = entity.getIncDec();
        this.isolClearCnt = entity.getIsolClearCnt();
        this.isolIngCnt = entity.getIsolIngCnt();
        this.localOccCnt = entity.getLocalOccCnt();
        this.overFlowCnt = entity.getOverFlowCnt();
    }

    public SidoInfState toEntity() {
        return SidoInfState.builder()
                .stdDay(stdDay)
                .deathCnt(deathCnt)
                .defCnt(defCnt)
                .gubun(gubun)
                .gubunEn(gubunEn)
                .incDec(incDec)
                .isolClearCnt(isolClearCnt)
                .isolIngCnt(isolIngCnt)
                .localOccCnt(localOccCnt)
                .overFlowCnt(overFlowCnt)
                .build();
    }

}
