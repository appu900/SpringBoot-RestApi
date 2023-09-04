package com.appu.springrestapi.Controllers;


import com.appu.springrestapi.Model.User;
import com.appu.springrestapi.Repositary.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired private UserRepository userRepo;

    @PostMapping("")
    public User newUser(@RequestBody User newUser){
        return userRepo.save(newUser);
    }
}
