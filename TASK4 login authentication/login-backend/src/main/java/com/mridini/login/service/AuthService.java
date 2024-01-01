package com.mridini.login.service;

import com.mridini.login.dto.request.AuthenticationRequest;
import com.mridini.login.dto.request.RegisterRequest;
import com.mridini.login.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
