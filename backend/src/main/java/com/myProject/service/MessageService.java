package com.myProject.service;

import java.util.List;

import com.myProject.exception.ChatException;
import com.myProject.exception.ProjectException;
import com.myProject.exception.UserException;
import com.myProject.model.Message;

public interface MessageService {

    Message sendMessage(Long senderId, Long chatId, String content) throws UserException, ChatException, ProjectException;

    List<Message> getMessagesByProjectId(Long projectId) throws ProjectException, ChatException;
}

