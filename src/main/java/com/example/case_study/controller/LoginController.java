package com.example.case_study.controller;

import com.example.case_study.model.Business;
import com.example.case_study.model.Customer;
import com.example.case_study.model.User;
import com.example.case_study.service.IBusinessService;
import com.example.case_study.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/login")
public class LoginController {
    @Autowired
    public IBusinessService iBusinessService;
    @Autowired
    public ICustomerService iCustomerService;

    @PostMapping
    public ResponseEntity login(@RequestBody User user) {
        List<Business> businessList = iBusinessService.findAll();
        List<Customer> customerList = iCustomerService.findAll();
        for (Business b : businessList) {
            if ((b.getName().equals(user.username)) && (b.getPassword().equals(user.password))) {
                return new ResponseEntity<>(b, HttpStatus.OK);
            }
        }
        for (Customer c : customerList) {
            if ((c.getName().equals(user.username)) && (c.getPassword().equals(user.password))) {
                return new ResponseEntity<>(c, HttpStatus.OK);
            }
        }
        Customer customer = new Customer();
        customer.setRole("uniq");
        return new ResponseEntity<>(customer,HttpStatus.OK);
    }
}