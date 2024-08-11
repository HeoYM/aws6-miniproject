package com.miniproject.apigateway.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gateway")
public class ApiGatewayController {

    @GetMapping("/test")
    public String test() {
        return "API-Gateway is working!";
    }

}
