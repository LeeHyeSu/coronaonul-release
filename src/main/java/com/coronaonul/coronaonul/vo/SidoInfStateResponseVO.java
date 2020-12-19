package com.coronaonul.coronaonul.vo;

import lombok.Data;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.Map;

@Data
@XmlRootElement(name="response")
public class SidoInfStateResponseVO {

    private Map<String, String> header;
    private SidoInfStateItemsDTO body;

}
