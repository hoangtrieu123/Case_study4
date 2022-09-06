package com.example.case_study.repository;

import com.example.case_study.model.Business;
import com.example.case_study.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BusinessRepository extends JpaRepository<Business,Long> {
    @Query(value = "select * from business where name like :name", nativeQuery = true)
    List<Business> findByName(@Param("name") String name);
}
