package com.miniproject.userservice.controller;


import com.miniproject.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestParam String username, @RequestParam String password) {
        userService.signup(username, password);
        return "회원가입 성공";
    }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        if (userService.login(username, password)) {
            return "로그인 성공";
        } else {
            return "로그인 실패";
        }
    }

    @GetMapping("/test")
    public String test() {
        return "user-service is working!";
    }
}