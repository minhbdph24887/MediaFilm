package com.example.mediaFilm.repository;

import com.example.mediaFilm.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    @Query(value = "select * from account where email= :email", nativeQuery = true)
    Account findAccountByEmail(@Param("email") String email);

    @Query(value = "select * from account where number_phone= :numberPhone", nativeQuery = true)
    Account findAccountByNumberPhone(@Param("numberPhone") String numberPhone);
}
