package com.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="user")
public class User {
	
	@Column(name="user_firstname")
	@Size(max=20)
	private String firstname;
	
	@Column(name="user_lastname")
	@Size(max=20)
	private String lastname;
	
	@Column(name="user_emailid")
	@Size(max=30)
	private String emailid;
	
	@Column(name="user_address")
	@Size(max=50)
	private String address;
	
	@Id
	@Column(name="user_username")
	@Size(max=20)
	private String username;
	
	@Column(name="user_password")
	@Size(max=15)
	private String password;
	
	@Column(name="user_confirmpassword")
	@Size(max=15)
	private String confirmpassword;
	
	public User() {
	}

	public User(String firstname, String lastname, String emailid, String address, String username, String password, String confirmpassword) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
		this.address = address;
		this.username = username;
		this.password = password;
		this.confirmpassword = confirmpassword;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	
}
