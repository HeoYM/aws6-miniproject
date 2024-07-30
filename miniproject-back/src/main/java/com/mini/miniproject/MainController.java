package com.mini.miniproject;

import java.util.Map;
import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:3000")  // 허용할 도메인
public class MainController {

    @GetMapping("/test")
    public Map<String, String> gettest() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "test");
        return response;
    }

    @GetMapping("/json")
    public Map<String, String> getJson() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello World");
        return response;
    }
    @GetMapping("/user")
    public Map<String, String> getUser() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "hymoo");
        return response;

    }
}
