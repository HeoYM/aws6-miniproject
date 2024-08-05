package com.miniproject.authservice.controller;

import com.miniproject.authservice.service.JwtUtil;
import com.miniproject.authservice.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(user.get("username"));
        if (userDetails.getPassword().equals(user.get("password"))) {
            return jwtUtil.generateToken(user.get("username"));
        }
        throw new RuntimeException("Invalid credentials");
    }
}

