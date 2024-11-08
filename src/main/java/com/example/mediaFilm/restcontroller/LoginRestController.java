package com.example.mediaFilm.restcontroller;

import com.example.mediaFilm.request.LoginEmailRequest;
import com.example.mediaFilm.request.LoginNumberRequest;
import com.example.mediaFilm.response.LoginResponse;
import com.example.mediaFilm.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/media-film/login/")
public class LoginRestController {
    @Autowired
    private AuthService authService;

    @PostMapping("email")
    public LoginResponse loginByEmail(@RequestBody LoginEmailRequest request) {
        return authService.authenticateByEmail(request);
    }

    @PostMapping("number")
    public LoginResponse loginByNumber(@RequestBody LoginNumberRequest request) {
        return authService.authenticateByNumber(request);
    }
}