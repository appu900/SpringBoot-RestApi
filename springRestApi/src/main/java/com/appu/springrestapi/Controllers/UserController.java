package com.appu.springrestapi.Controllers;


import com.appu.springrestapi.Exception.UserNotFound;
import com.appu.springrestapi.Model.User;
import com.appu.springrestapi.Repositary.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
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

   @GetMapping("{id}")
   @ResponseStatus(HttpStatus.ACCEPTED)
   public User getUserById(@PathVariable Long id){
        return userRepo.findById(id).orElseThrow(()->new UserNotFound(id));
   }

   @PutMapping("{id}")
   @ResponseStatus(HttpStatus.OK)
    public User updateUserData(@PathVariable Long id,@RequestBody User newUser){
        return userRepo.findById(id)
                .map(user->{
                    user.setUserName(newUser.getUserName());
                    user.setEmail(newUser.getEmail());
                    user.setName(newUser.getName());
                    return userRepo.save(user);
                }).orElseThrow(()-> new UserNotFound(id));
   }


   @DeleteMapping("{id}")
   @ResponseStatus(HttpStatus.ACCEPTED)
   public String deleteUser(@PathVariable Long id){
        if(!userRepo.existsById(id)){
            throw new UserNotFound(id);
        }
        userRepo.deleteById(id);
        return "user deleted sucessfully";
   }


}
