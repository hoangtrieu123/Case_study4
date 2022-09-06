package com.example.case_study.service;

import com.example.case_study.common.ICRUDService;
import com.example.case_study.model.Post;

import java.util.List;

public interface IPostService extends ICRUDService<Post> {
    List<Post> findBySearchTitle(String title);
//    List<Post> findBySearchLanguage(String language);

}
