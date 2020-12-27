package com.coronaonul.coronaonul.controller;

import com.coronaonul.coronaonul.service.SidoInfStateService;
import com.coronaonul.coronaonul.vo.CreateDate;
import com.coronaonul.coronaonul.vo.SidoDetails;
import com.coronaonul.coronaonul.vo.SidoInfStateItemDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RestController
public class SidoInfStateController {

    private final SidoInfStateService sidoInfStateService;

    @GetMapping("/coronaonul")
    public List<SidoInfStateItemDTO> requestSidoInfState() {
        String createDt = new CreateDate().getCreateDt();   // 현재 날짜 구하기
        return sidoInfStateService.findByDate(createDt);
    }

    @GetMapping("/coronaonul/{sido}")
    public SidoDetails requestSidoDetails(@PathVariable String sido) {
        String createDt = new CreateDate().getCreateDt();   // 현재 날짜 구하기
        return sidoInfStateService.findBySido(sido, createDt);
    }

}
