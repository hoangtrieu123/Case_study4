package com.example.case_study.controller;

import com.example.case_study.model.ApplicationForm;
import com.example.case_study.service.impl.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/application-form")
public class ApplicationFormController {
    @Autowired
    public ApplicationFormService applicationFormService;
    @GetMapping
    public ResponseEntity<List<ApplicationForm>> findAll() {
        return new ResponseEntity<>(applicationFormService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ApplicationForm> create(@RequestBody ApplicationForm applicationForm) {
        return new ResponseEntity<>(applicationFormService.save(applicationForm), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApplicationForm> update(@RequestBody ApplicationForm applicationForm) {
        Optional<ApplicationForm> update = applicationFormService.findById(applicationForm.getId());
        if (update.isPresent()) {
            return new ResponseEntity<>(applicationFormService.save(applicationForm), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApplicationForm> delete(@PathVariable Long id) {
        applicationFormService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationForm> findById(@PathVariable Long id) {
        Optional<ApplicationForm> findById = applicationFormService.findById(id);
        if (findById.isPresent()) {
            return new ResponseEntity<>(findById.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
