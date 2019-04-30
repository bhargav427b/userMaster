package com.user.service.impl;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.dto.UserDTO;
import com.user.entity.User;
import com.user.repository.UserRepository;
import com.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDTO updateUser(UserDTO userDto) {
		Optional<User> optional = userRepository.findById(userDto.getUsername());
		User user = null;
		if(optional.isPresent()) {
			user = optional.get();
		}
		ModelMapper mapper = new ModelMapper();
		user = mapper.map(userDto, User.class);
		user = userRepository.save(user);
		return mapper.map(user, UserDTO.class);
	}

	@Override
	public UserDTO userLogin(String username, String password) {
		Optional<User> optional = userRepository.findByUsername(username);
		User user = null;
		if(optional.isPresent()) {
			user = optional.get();
		}
		if(user.getPassword().equals(password)) {
			ModelMapper mapper = new ModelMapper();
			return mapper.map(user, UserDTO.class);
		}
		return null;
	}

	@Override
	@Transactional
	public UserDTO userRegistration(User user) {
		userRepository.save(user);
		ModelMapper mapper = new ModelMapper();
		return mapper.map(user, UserDTO.class);
	}

	@Override
	public UserDTO getUserByUsername(String username) {
		Optional<User> optional = userRepository.findByUsername(username);
		User user = null;
		if(optional.isPresent()) {
			user = optional.get();
		}
			ModelMapper mapper = new ModelMapper();
			return mapper.map(user, UserDTO.class);
	}

}