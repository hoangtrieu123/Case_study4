package com.example.case_study.repository;

import com.example.case_study.model.Business;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BusinessRepository extends JpaRepository<Business,Long> {
    @Query(value = "select * from business where nameBusiness like :name", nativeQuery = true)
    Page<Business> findByName(@Param("name") String name, Pageable pageable);

    @Query(value = "select * from business where nameBusiness like :name", nativeQuery = true)
    List<Business> findByNameList(@Param("name") String name);
}
