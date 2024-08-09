package com.miniproject.boardservice.repository;

import com.miniproject.boardservice.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
}