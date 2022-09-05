package com.example.case_study.service.impl;

import com.example.case_study.model.Business;
import com.example.case_study.service.IBusinessService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class BusinessService implements IBusinessService {
    @Override
    public Business save(Business business) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public Optional<Business> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Business> findAll() {
        return null;
    }
}
