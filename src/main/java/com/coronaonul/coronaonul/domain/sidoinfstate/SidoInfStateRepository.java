package com.coronaonul.coronaonul.domain.sidoinfstate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SidoInfStateRepository extends JpaRepository<SidoInfState, Long> {

    @Query("SELECT s FROM SidoInfState s WHERE s.stdDay = :stdDay")
    List<SidoInfState> findByDate(@Param("stdDay") String date);

    @Query("SELECT s FROM SidoInfState s WHERE s.stdDay = :stdDay AND s.gubunEn = :gubunEn")
    List<SidoInfState> findByDateAndSido(@Param("stdDay") String date, @Param("gubunEn") String sido);

}
