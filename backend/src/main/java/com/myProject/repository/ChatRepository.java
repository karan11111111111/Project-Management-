package com.myProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myProject.model.Chat;
import com.myProject.model.Project;

public interface ChatRepository extends JpaRepository<Chat, Long> {
    

	Chat findByProject(Project projectById);
	
//	List<Chat> findByProjectNameContainingIgnoreCase(String projectName);
}

