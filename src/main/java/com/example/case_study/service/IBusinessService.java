package com.example.case_study.service;

import com.example.case_study.common.ICRUDService;
import com.example.case_study.model.Business;
import com.example.case_study.model.Post;

import java.util.List;

public interface IBusinessService extends ICRUDService<Business> {
    List<Business> findBySearchName(String name);
}
