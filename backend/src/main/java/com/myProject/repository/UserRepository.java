package com.myProject.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.myProject.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
