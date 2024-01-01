package com.mridini.login.service;

import java.util.List;

import com.mridini.login.dto.request.UserRequest;
import com.mridini.login.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
