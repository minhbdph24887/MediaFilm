package com.example.mediaFilm.service;

import com.example.mediaFilm.entity.Account;
import com.example.mediaFilm.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = accountRepository.findAccountByEmail(email);
        if (account == null) {
            throw new UsernameNotFoundException("Email không tồn tại");
        }
        return new User(account.getEmail(), "", account.getAuthorities());
    }
}
