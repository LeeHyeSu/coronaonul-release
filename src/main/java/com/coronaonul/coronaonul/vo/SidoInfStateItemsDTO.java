package com.coronaonul.coronaonul.vo;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name="body")
public class SidoInfStateItemsDTO {

    private List<SidoInfStateItemDTO> items;

    @XmlElementWrapper(name="items")
    @XmlElement(name="item")
    public List<SidoInfStateItemDTO> getItems() {
        return items;
    }

    public void setItems(List<SidoInfStateItemDTO> items) {
        this.items = items;
    }

}
