package com.example.case_study.repository;

import com.example.case_study.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    @Query(value = "select * from post p where p.title like :keyword or p.language like :keyword or p.skill like :keyword", nativeQuery = true)
    List<Post> findByTitleOrLanguage(@Param("keyword") String title);

    @Query(value = "select * from post p where p.business_id like :keyword", nativeQuery = true)
    List<Post> findByBusinessId(@Param("keyword") Long id);
}
