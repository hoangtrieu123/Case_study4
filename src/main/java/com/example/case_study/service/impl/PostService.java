package com.example.case_study.service.impl;

import com.example.case_study.model.Post;
import com.example.case_study.repository.PostRepository;
import com.example.case_study.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PostService implements IPostService {
    @Autowired
    public PostRepository postRepository;
    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void deleteById(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public Optional<Post> findById(Long id) {
        return postRepository.findById(id);
    }

    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public List<Post> findBySearch(String title) {
        return postRepository.findByTitleOrLanguage("%" + title + "%");

    }

    @Override
    public List<Post> findByBusinessId(Long id) {
        return postRepository.findByBusinessId(id);
    }

}
