package com.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.user.dto.LoginDTO;
import com.user.dto.UserDTO;
import com.user.entity.User;
import com.user.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String check() {
		return "Hello, The service works!!";
	}
	
	@PutMapping("/users")
	public UserDTO updateUser(@RequestBody UserDTO userDto) {
		return userService.updateUser(userDto);
	}

	@PostMapping("/login")
	public UserDTO userLogin(@RequestBody LoginDTO loginDto) {
		return userService.userLogin(loginDto.getUsername(), loginDto.getPassword());
	}

	@PostMapping("/users")
	public UserDTO userRegistration(@RequestBody User user) {
		return userService.userRegistration(user);
	}
	
	@GetMapping("/users/{username}")
	public UserDTO getUserByUsername(@PathVariable String username) {
		return userService.getUserByUsername(username);
	}

}
