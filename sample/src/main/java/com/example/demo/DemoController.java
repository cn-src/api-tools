package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author cn-src
 */
@RestController
@RequestMapping
public class DemoController {

    @GetMapping("/demo")
    public String get() {
        return "demo";
    }
}
