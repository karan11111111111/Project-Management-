package com.myProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myProject.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {
	PasswordResetToken findByToken(String token);
}
