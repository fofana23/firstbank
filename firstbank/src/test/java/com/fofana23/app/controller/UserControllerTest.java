package com.fofana23.app.controller;

import com.fofana23.app.model.AccountHolder;
import com.fofana23.app.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {

    @Mock
    UserService service;

    @InjectMocks
    UserController controller;


    @Test
    void register() throws IOException {
        AccountHolder holder = new AccountHolder();
        holder.setId(1);
        holder.setEmail("admin@gmail.com");
        Mockito.when(service.register(holder)).thenReturn(holder);

        AccountHolder returnedHolder = controller.register(holder);

        assertEquals("admin@gmail.com", returnedHolder.getEmail());

    }

    @Test
    void login() {
    }
}