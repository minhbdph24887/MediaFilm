package com.example.mediaFilm.service;

import com.example.mediaFilm.request.LoginEmailRequest;
import com.example.mediaFilm.request.LoginNumberRequest;
import com.example.mediaFilm.response.LoginResponse;
import com.example.mediaFilm.entity.Account;
import com.example.mediaFilm.repository.AccountRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final String SECRET_KEY = "your_secret_key";

    public LoginResponse authenticateByEmail(LoginEmailRequest request) {
        Account account = accountRepository.findAccountByEmail(request.getEmail());
        if (account == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email không tồn tại");
        } else {
            Authentication authentication = new UsernamePasswordAuthenticationToken(request.getEmail(), null);
            authenticationManager.authenticate(authentication);
            String token = generateToken(authentication, account);
            String refreshToken = generateRefreshToken(authentication);
            return new LoginResponse(token, refreshToken);
        }
    }

    public LoginResponse authenticateByNumber(LoginNumberRequest request) {
        Account account = accountRepository.findAccountByNumberPhone(request.getNumberPhone());
        if (account == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Số điện thoại không tồn tại");
        } else if (!passwordEncoder.matches(request.getPassWord(), account.getEncryptionPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Mật khẩu không đúng");
        } else {
            Authentication authentication = new UsernamePasswordAuthenticationToken(account.getEmail(), request.getPassWord());
            authenticationManager.authenticate(authentication);
            String token = generateToken(authentication, account);
            String refreshToken = generateRefreshToken(authentication);
            return new LoginResponse(token, refreshToken);
        }
    }

    private String generateToken(Authentication authentication, Account account) {
        long EXPIRATION_TIME = 86400000;
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", account.getRole().getCodeRole());
        claims.put("fullName", account.getFullName());
        claims.put("email", account.getEmail());
        claims.put("numberPhone", account.getNumberPhone());
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(authentication.getName())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    private String generateRefreshToken(Authentication authentication) {
        long REFRESH_EXPIRATION_TIME = 2592000000L;
        return Jwts.builder()
                .setSubject(authentication.getName())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }
}