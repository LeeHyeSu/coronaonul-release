package com.coronaonul.coronaonul.domain.sidoinfstate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SidoInfStatePK implements Serializable {

    private String stdDay;
    private String gubunEn;

}
