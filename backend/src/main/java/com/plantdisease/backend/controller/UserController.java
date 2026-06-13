package com.plantdisease.backend.controller;

import com.plantdisease.backend.model.User;
import com.plantdisease.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String home() {
        return "AI Plant Disease Detection Backend Running";
    }

    @PostMapping("/register")
    public String registerUser(
            @RequestBody User user) {

        User existingUser =
                userRepository.findByEmail(
                        user.getEmail());

        if(existingUser != null) {
            return "Email already exists";
        }

        userRepository.save(user);

        return "Registration Successful";
    }

   @PostMapping("/login")
public User loginUser(
        @RequestBody User user) {

    User existingUser =
            userRepository.findByEmail(
                    user.getEmail());

    if(existingUser == null) {

        return null;
    }

    if(!existingUser.getPassword()
            .equals(user.getPassword())) {

        return null;
    }

    return existingUser;
}
}

