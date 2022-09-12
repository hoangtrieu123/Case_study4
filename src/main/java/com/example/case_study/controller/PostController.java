package com.example.case_study.controller;

import com.example.case_study.model.Post;
import com.example.case_study.service.IPostService;
import com.example.case_study.service.impl.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/posts")
public class PostController {
    @Autowired
    public IPostService iPostService;

    @GetMapping
    public ResponseEntity<List<Post>> findAll() {
        return new ResponseEntity<>(iPostService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Post> create(@RequestBody Post post) {
        return new ResponseEntity<>(iPostService.save(post), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> update(@RequestBody Post post) {
        Optional<Post> update = iPostService.findById(post.getId());
        if (update.isPresent()) {
            return new ResponseEntity<>(iPostService.save(post), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Post> delete(@PathVariable("id") Long id) {
        iPostService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> findById(@PathVariable Long id) {
        Optional<Post> findById = iPostService.findById(id);
        if (findById.isPresent()) {
            return new ResponseEntity<>(findById.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<List<Post>> findByName(@PathVariable String name) {
        List<Post> posts = iPostService.findBySearch(name);
        if (posts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(posts);
    }
    @GetMapping("/business/{id}")
    public ResponseEntity<List<Post>> findPostByBusinessById(@PathVariable Long id){
        List<Post> posts = iPostService.findByBusinessId(id);
        if (posts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(posts);
    }
}
