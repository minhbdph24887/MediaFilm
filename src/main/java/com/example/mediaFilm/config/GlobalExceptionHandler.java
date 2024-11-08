package com.example.mediaFilm.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<Map<String, String>> handleResponseStatusException(ResponseStatusException ex,
                                                                             WebRequest request) {
        Map<String, String> response = new HashMap<>();
        response.put("status", "error");
        response.put("message", ex.getReason());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGlobalException(Exception ex,
                                                                     WebRequest request) {
        Map<String, String> response = new HashMap<>();
        response.put("status", "error");
        response.put("message", "Internal Server Error: " + ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
