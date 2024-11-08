package com.example.mediaFilm;

import liquibase.integration.spring.SpringLiquibase;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;

@SpringBootApplication
public class MediaFilmApplication {

    public static void main(String[] args) {
        SpringApplication.run(MediaFilmApplication.class, args);
    }

    @Bean
    public SpringLiquibase liquibase(DataSource dataSource) {
        SpringLiquibase springLiquibase = new SpringLiquibase();
        springLiquibase.setChangeLog("classpath:databaseGender/changelog-master.xml");
        springLiquibase.setDataSource(dataSource);
        return springLiquibase;
    }
}
