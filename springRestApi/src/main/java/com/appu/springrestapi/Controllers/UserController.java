package com.appu.springrestapi.Controllers;


import com.appu.springrestapi.Model.User;
import com.appu.springrestapi.Repositary.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired private UserRepository userRepo;


    @PostMapping("")
    public User newUser(@RequestBody User newUser){
        return userRepo.save(newUser);
    }
    @GetMapping("")
    public List<User> getALlUser(){
        return userRepo.findAll();
    }
}
