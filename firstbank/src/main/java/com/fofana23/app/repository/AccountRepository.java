package com.fofana23.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fofana23.app.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {

}
