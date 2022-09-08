package com.example.case_study.service;

import com.example.case_study.common.ICRUDService;
import com.example.case_study.model.Post;

import java.util.List;

public interface IPostService extends ICRUDService<Post> {
    List<Post> findBySearch(String title);

    List<Post> findByBusinessId(Long id);
}
