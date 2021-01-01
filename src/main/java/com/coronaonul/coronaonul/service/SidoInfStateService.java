package com.coronaonul.coronaonul.service;

import com.coronaonul.coronaonul.domain.sidoinfstate.SidoInfState;
import com.coronaonul.coronaonul.domain.sidoinfstate.SidoInfStatePK;
import com.coronaonul.coronaonul.domain.sidoinfstate.SidoInfStateRepository;
import com.coronaonul.coronaonul.vo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SidoInfStateService {

    private final SidoInfStateRepository sidoInfStateRepository;

    @Value("${serviceKey}")
    private String serviceKey;

    @Value("${sidoInfStateURL}")
    private String sidoInfStateURL;

    private RestTemplate restTemplate = new RestTemplate();

    @Transactional
    public void save(SidoInfStateItemDTO item) {
        sidoInfStateRepository.save(item.toEntity());
    }

    @Transactional
    public List<SidoInfStateItemDTO> findByDate(String createDt) {

        List<SidoInfState> sidoInfStateList = sidoInfStateRepository.findByDate(createDt);

        if (!sidoInfStateList.isEmpty()) {
            System.out.println("from database");
            return sidoInfStateList.stream()
                    .map(SidoInfStateItemDTO::new)
                    .sorted((Comparator.comparing(SidoInfStateItemDTO::getGubun)))
                    .collect(Collectors.toList());
        } else {
            System.out.println("call open api");
            return getItemsFromOpenApi(createDt).stream()
                    .sorted((Comparator.comparing(SidoInfStateItemDTO::getGubun)))
                    .collect(Collectors.toList());
        }

    }

    @Transactional
    public List<SidoInfStateItemDTO> getItemsFromOpenApi(String createDt) {

        List<SidoInfStateItemDTO> items = new ArrayList<>();

        try {
            URI uri = new URI(sidoInfStateURL + "?serviceKey=" + serviceKey
                    + "&pageNo=1" + "&numOfRows=10"
                    + "&startCreateDt=" + createDt + "&endCreateDt=" + createDt);

            SidoInfStateResponseVO response = restTemplate.getForObject(uri, SidoInfStateResponseVO.class);
            items = response.getBody().getItems();

            for (SidoInfStateItemDTO item : items) {
                item.setStdDay(createDt);

                Optional<SidoInfState> sidoInfState = sidoInfStateRepository.findById(new SidoInfStatePK(createDt, item.getGubunEn()));
                if (!sidoInfState.isPresent()) {
                    save(item);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return items;

    }

    @Transactional
    public SidoDetails findBySido(String sido, String createDt) {

        SidoDetails sidoDetails = new SidoDetails();
        Optional<SidoInfState> sidoInfState = sidoInfStateRepository.findById(new SidoInfStatePK(createDt, sido));

        if (sidoInfState.isPresent()) {
            sidoDetails.setSidoInfState(new SidoInfStateItemDTO(sidoInfState.get()));
        } else {
            System.out.println("call open api");
            List<SidoInfStateItemDTO> items = getItemsFromOpenApi(createDt);

            for (SidoInfStateItemDTO item : items) {
                if (item.getGubunEn().equals(sido)) {
                    sidoDetails.setSidoInfState(item);
                }
            }
        }

        sidoDetails.setWeekData(getWeekData(sido, createDt));

        return sidoDetails;
    }

    @Transactional
    public List<NumberByDate> getWeekData(String sido, String createDt) {

        List<NumberByDate> weekData = new ArrayList<>();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        LocalDate now = LocalDate.parse(createDt, formatter);

        // 현재 날짜로부터 일주일 전까지의 날짜 리스트 생성
        for (int i = 6; i > 0; i--) {
            String date = now.minusDays(i).format(DateTimeFormatter.BASIC_ISO_DATE);

            Optional<SidoInfState> sidoInfState = sidoInfStateRepository.findById(new SidoInfStatePK(date, sido));
            if (sidoInfState.isPresent()) {
                weekData.add(new NumberByDate(date, sidoInfState.get().getIncDec()));
            } else {
                weekData.add(new NumberByDate(date));
            }
        }

        Optional<SidoInfState> sidoInfState = sidoInfStateRepository.findById(new SidoInfStatePK(createDt, sido));
        if (sidoInfState.isPresent()) {
            weekData.add(new NumberByDate(createDt, sidoInfState.get().getIncDec()));
        } else {
            weekData.add(new NumberByDate(createDt));
        }

        for (NumberByDate numberByDate : weekData) {
            if (numberByDate.getNumber() == null) {
                System.out.println("call open api");
                try {
                    URI uri = new URI(sidoInfStateURL + "?serviceKey=" + serviceKey
                            + "&pageNo=1" + "&numOfRows=10"
                            + "&startCreateDt=" + numberByDate.getDate() + "&endCreateDt=" + numberByDate.getDate());

                    SidoInfStateResponseVO response = restTemplate.getForObject(uri, SidoInfStateResponseVO.class);
                    List<SidoInfStateItemDTO> items = response.getBody().getItems();

                    // items 를 순회하면서 해당 시·도 이면 incDecByDate 에 오늘 확진자 수(IncDec) 데이터 set
                    for (SidoInfStateItemDTO item : items) {
                        item.setStdDay(numberByDate.getDate());

                        if (item.getGubunEn().equals(sido) && !item.getStdDay().equals(createDt)) {
                            sidoInfState = sidoInfStateRepository.findById(new SidoInfStatePK(item.getStdDay(), item.getGubunEn()));
                            if (!sidoInfState.isPresent()) {
                                save(item);
                            }

                            numberByDate.setNumber(item.getIncDec());
                            break;
                        }
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }

            }
        }


        return weekData;

    }

}
