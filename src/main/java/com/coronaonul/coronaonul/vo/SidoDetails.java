package com.coronaonul.coronaonul.vo;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class SidoDetails {

    private SidoInfStateItemDTO sidoInfState;
    private List<NumberByDate> weekData;

}
