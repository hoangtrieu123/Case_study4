package com.example.case_study.controller;

import com.example.case_study.model.ApplicationForm;
import com.example.case_study.service.IApplicationFromService;
import com.example.case_study.service.impl.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
@RequestMapping("/applications")
public class ApplicationFormController {
    @Autowired
    public IApplicationFromService iApplicationFormService;

    @Value("C:\\Users\\ADMIN\\Desktop\\case_study\\src\\main\\resources\\static\\")
    private  String fileUpload;

    @GetMapping
    public ResponseEntity<List<ApplicationForm>> findAll() {
        return new ResponseEntity<>(iApplicationFormService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<ApplicationForm> create(@RequestPart("applicationForm") ApplicationForm applicationForm
            , @RequestPart("file") MultipartFile file) throws IOException {
        applicationForm.setApplicationUrl(file.getOriginalFilename());
        try {

            FileCopyUtils.copy(file.getBytes(), new File(fileUpload + file.getOriginalFilename()));

        }catch (IOException ex) {
            System.err.println("Error");
        }
        return new ResponseEntity<>(iApplicationFormService.save(applicationForm), HttpStatus.OK);
    }

    @PutMapping
    private ResponseEntity<ApplicationForm> update( @RequestPart("applicationForm") ApplicationForm applicationForm
            , @RequestPart("file") MultipartFile file) throws IOException {
        applicationForm.setApplicationUrl(file.getOriginalFilename());
        try {

            FileCopyUtils.copy(file.getBytes(), new File(fileUpload + file.getOriginalFilename()));

        }catch (IOException ex) {
            System.err.println("Error");
        }
        return new ResponseEntity<>(iApplicationFormService.save(applicationForm), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApplicationForm> delete(@PathVariable Long id) {
        iApplicationFormService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationForm> findById(@PathVariable Long id) {
        Optional<ApplicationForm> applicationForm = iApplicationFormService.findById(id);
        if (applicationForm.isPresent()) {
            return new ResponseEntity<>(applicationForm.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
