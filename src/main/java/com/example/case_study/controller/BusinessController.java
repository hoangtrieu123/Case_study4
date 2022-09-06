package com.example.case_study.controller;

import com.example.case_study.model.Business;
import com.example.case_study.model.Post;
import com.example.case_study.service.impl.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/business")
public class BusinessController {
    @Autowired
    public BusinessService businessService;
    @GetMapping
    public ResponseEntity<List<Business>> findAll() {
        return new ResponseEntity<>(businessService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Business> create(@RequestBody Business business) {
        return new ResponseEntity<>(businessService.save(business), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Business> update(@RequestBody Business business) {
        Optional<Business> update = businessService.findById(business.getId());
        if (update.isPresent()) {
            return new ResponseEntity<>(businessService.save(business), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Business> delete(@PathVariable Long id) {
        businessService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Business> findById(@PathVariable Long id) {
        Optional<Business> findById = businessService.findById(id);
        if (findById.isPresent()) {
            return new ResponseEntity<>(findById.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @GetMapping("search/}")
    public ResponseEntity<List<Business>> findByName(@RequestParam("name") String name) {
        List<Business> businesses = businessService.findBySearchName(name);
        if (businesses.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(businesses);
    }
}
