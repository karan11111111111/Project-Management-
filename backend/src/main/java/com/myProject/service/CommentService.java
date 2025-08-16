package com.myProject.service;

import com.myProject.exception.IssueException;
import com.myProject.exception.UserException;
import com.myProject.model.Comment;

import java.util.List;

public interface CommentService {
    Comment createComment(Long issueId,Long userId,String comment) throws UserException, IssueException;

    void  deleteComment(Long commentId, Long userId) throws UserException, IssueException;

    List<Comment> findCommentByIssueId(Long issueId);

}
