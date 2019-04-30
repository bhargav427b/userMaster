package com.user.dto;

public class UserDTO {
	
	private String firstname;
	
	private String lastname;
	
	private String emailid;
	
	private String address;
	
	private String username;
	
	public UserDTO() {
	}

	public UserDTO(String firstname, String lastname, String emailid, String address, String username) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
		this.address = address;
		this.username = username;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
}
