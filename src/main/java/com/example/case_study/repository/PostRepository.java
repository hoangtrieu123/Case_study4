package com.example.case_study.repository;

import com.example.case_study.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    @Query(value = "select * from post where title like :title", nativeQuery = true)
    List<Post> findByTitle(@Param("title") String title);
//    @Query(value = "select * from post where language like :language", nativeQuery = true)
//    List<Post> findByLanguage(@Param("language") String language);

}
