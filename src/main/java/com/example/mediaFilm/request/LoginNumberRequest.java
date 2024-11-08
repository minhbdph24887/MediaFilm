package com.example.mediaFilm.request;

import lombok.Data;

@Data
public class LoginNumberRequest {
    private String numberPhone;
    private String passWord;
}