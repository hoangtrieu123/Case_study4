package com.example.case_study.controller;

import com.example.case_study.model.Business;
import com.example.case_study.model.Customer;
import com.example.case_study.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    public ICustomerService iCustomerService;
    @GetMapping
    public ResponseEntity<List<Customer>> findAll() {
        return new ResponseEntity<>(iCustomerService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Customer> create(@RequestBody Customer customer) {
        customer.setRole("customer");
        return new ResponseEntity<>(iCustomerService.save(customer), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> update(@RequestBody Customer customer) {
        Optional<Customer> update = iCustomerService.findById(customer.getId());
        if (update.isPresent()) {
            return new ResponseEntity<>(iCustomerService.save(customer), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Business> delete(@PathVariable Long id) {
        iCustomerService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Long id) {
        Optional<Customer> findById = iCustomerService.findById(id);
        if (findById.isPresent()) {
            return new ResponseEntity<>(findById.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
