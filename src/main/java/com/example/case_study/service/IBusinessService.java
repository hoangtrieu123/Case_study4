package com.example.case_study.service;

import com.example.case_study.common.ICRUDService;
import com.example.case_study.model.Business;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBusinessService extends ICRUDService<Business> {

    Iterable<Business> findAllByName(String name);
    Page<Business> findPage(Pageable pageable);
    Page<Business> findByName(String name,Pageable pageable);
}
