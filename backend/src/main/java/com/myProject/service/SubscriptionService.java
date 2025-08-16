package com.myProject.service;

import com.myProject.domain.PlanType;
import com.myProject.model.Subscription;
import com.myProject.model.User;

public interface SubscriptionService {
    Subscription createSubscription(User user);
    Subscription getUserSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);
}
