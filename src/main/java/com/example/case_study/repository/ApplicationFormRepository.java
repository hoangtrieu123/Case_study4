package com.example.case_study.repository;

import com.example.case_study.model.ApplicationForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationFormRepository extends JpaRepository<ApplicationForm, Long> {
}
