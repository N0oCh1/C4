package com.RestauranteBack.C4.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.RestauranteBack.C4.models.Test;
import com.RestauranteBack.C4.repository.TestRepository;

@RestController
public class testController {
    @Autowired
    private TestRepository testRepository;

    @GetMapping("/test")
    List<Test> getTest(){
        return testRepository.findAll();
    }
    @PostMapping("/test")
    Test postTest(@RequestBody Test newtest){
        return testRepository.save(newtest);
    }
}
