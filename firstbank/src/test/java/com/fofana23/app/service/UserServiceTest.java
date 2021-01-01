package com.fofana23.app.service;

import com.fofana23.app.model.AccountHolder;
import com.fofana23.app.repository.AccountHolderRepository;
import com.fofana23.app.repository.AccountRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(MockitoExtension.class)

class UserServiceTest {

    @Mock
    AccountHolderRepository holderRepo;

    @Mock
    AccountRepository accountRepo;

    @InjectMocks
    UserService userService;

    @Test
    void register() {
        AccountHolder holder = new AccountHolder();
        Throwable error = Assertions.catchThrowable(() -> {
        userService.register(holder);
        });
        assertEquals("Invalid request", error.getMessage());

        holder.setEmail("example@email.com");
        holder.setSsn(200000001);
        Mockito.when(holderRepo.findByEmail(holder.getEmail())).thenReturn(holder);
        AccountHolder result = userService.register(holder);
        assertEquals("example@email.com", result.getEmail());
    }

    @Test
    void addAccount() {
    }
}