package com.example.case_study.service.impl;

import com.example.case_study.model.ApplicationForm;
import com.example.case_study.repository.ApplicationFormRepository;
import com.example.case_study.service.IApplicationFromService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationFormService implements IApplicationFromService {
    @Autowired
    public ApplicationFormRepository applicationFormRepository;

    @Override
    public ApplicationForm save(ApplicationForm applicationForm) {
        return applicationFormRepository.save(applicationForm);
    }

    @Override
    public void deleteById(Long id) {
        applicationFormRepository.deleteById(id);
    }

    @Override
    public Optional<ApplicationForm> findById(Long id) {
        return applicationFormRepository.findById(id);
    }

    @Override
    public List<ApplicationForm> findAll() {
        return applicationFormRepository.findAll();
    }
}
