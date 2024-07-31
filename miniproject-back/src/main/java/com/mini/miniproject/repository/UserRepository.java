package com.mini.miniproject.repository;

import com.mini.miniproject.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    // 기본 CRUD 메서드는 MongoRepository에서 제공됩니다.
}

