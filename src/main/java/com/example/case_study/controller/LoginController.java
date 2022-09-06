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

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("*")
@RequestMapping("/Login")
public class LoginController {
    @Autowired
    public IBusinessService iBusinessService;
    @Autowired
    public ICustomerService iCustomerService;

    @GetMapping
    public ResponseEntity<Business> login1(User user) {
        List<Business> businessList = iBusinessService.findAll();
        for (Business b : businessList) {
            if (user.username.equals(b.getName()) && user.password.equals(b.getPassword())) {
                return new ResponseEntity<>(b, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
