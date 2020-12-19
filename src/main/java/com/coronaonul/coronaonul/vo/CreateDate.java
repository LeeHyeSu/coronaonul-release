package com.coronaonul.coronaonul.vo;

import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@NoArgsConstructor
public class CreateDate {

    public String getCreateDt() {

        LocalTime currentTime = LocalTime.now();
        LocalTime referenceTime = LocalTime.of(10, 0, 0);

        // 현재 시간이 기준 시간 (10:00 A.M.) 보다 이전 시간이라면 하루 전 날의 확진자 정보 제공
        // 공공데이터 업데이트 시간 전에 api 호출 시 null 값을 반환하지 못하게 하기 위함
        if (currentTime.isBefore(referenceTime)) {
            return LocalDateTime.now().minusDays(1).format(DateTimeFormatter.BASIC_ISO_DATE);
        } else {
            return LocalDateTime.now().format(DateTimeFormatter.BASIC_ISO_DATE);
        }

    }
}
