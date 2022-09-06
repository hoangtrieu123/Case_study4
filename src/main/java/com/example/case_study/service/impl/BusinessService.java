package com.example.case_study.service.impl;

import com.example.case_study.model.Business;
import com.example.case_study.repository.BusinessRepository;
import com.example.case_study.service.IBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class BusinessService implements IBusinessService {
    @Autowired
    public BusinessRepository businessRepository;
    @Override
    public Business save(Business business) {
        return businessRepository.save(business);
    }

    @Override
    public void deleteById(Long id) {
        businessRepository.deleteById(id);
    }

    @Override
    public Optional<Business> findById(Long id) {
        return businessRepository.findById(id);
    }

    @Override
    public List<Business> findAll() {
        return businessRepository.findAll();
    }

    @Override
    public Iterable<Business> findAllByName(String name) {
        return businessRepository.findByNameList(name);
    }

    @Override
    public Page<Business> findPage(Pageable pageable) {
        return businessRepository.findAll(pageable);
    }

    @Override
    public Page<Business> findByName(String name, Pageable pageable) {
        return businessRepository.findByName(name,pageable);
    }
}
