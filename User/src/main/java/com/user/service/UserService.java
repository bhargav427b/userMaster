package com.user.service;

import com.user.dto.UserDTO;
import com.user.entity.User;

public interface UserService {
	
	UserDTO updateUser(UserDTO userDto);
	
	UserDTO userLogin(String username, String password);
	
	UserDTO userRegistration(User user);
	
	UserDTO getUserByUsername(String username);

}
