package com.example.case_study.controller;

import com.example.case_study.model.Business;
import com.example.case_study.service.IBusinessService;
import com.example.case_study.service.impl.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/business")
public class BusinessController {
    @Value("C:\\Users\\ADMIN\\Desktop\\case_study\\src\\main\\resources\\static\\")
    private  String fileUpload;
    @Autowired
    private IBusinessService iBusinessService;


    @GetMapping("/page")
    public ResponseEntity<Page<Business>> showAll(@PageableDefault(value = 5) Pageable pageable) {
        Page<Business> productPage = iBusinessService.findPage(pageable);
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Business> create( @RequestPart("business") Business business
            , @RequestPart("file") MultipartFile image) throws IOException {
        business.setRole("business");
        business.setImageUrl(image.getOriginalFilename());
        try {
            FileCopyUtils.copy(image.getBytes(), new File(fileUpload + image.getOriginalFilename()));
        }catch (IOException ex) {
            System.err.println("Error");
        }
        return new ResponseEntity<>(iBusinessService.save(business), HttpStatus.OK);
    }

    @PutMapping
    private ResponseEntity<Business> update( @RequestPart("business") Business business
            , @RequestPart("file") MultipartFile image) throws IOException {
        business.setImageUrl(image.getOriginalFilename());
        try {

            FileCopyUtils.copy(image.getBytes(), new File(fileUpload + image.getOriginalFilename()));

        }catch (IOException ex) {
            System.err.println("Error");
        }
        return new ResponseEntity<>(iBusinessService.save(business), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        iBusinessService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    private ResponseEntity<Business> detail(@PathVariable("id") Long id) {
        Optional<Business> businessOptional = iBusinessService.findById(id);
        if (businessOptional.isPresent()) {
            return new ResponseEntity<>(businessOptional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Business>> showAllByName(@RequestParam("search") String search,
                                                        @PageableDefault(value = 2) Pageable pageable) {
        Page<Business> products = iBusinessService.findByName(search,pageable);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
