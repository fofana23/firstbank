package com.fofana23.app.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AccountTest {

    @Test
    void getNumber() {
        Account holder = new Account();
        holder.setNumber(28);
        assertEquals(28, holder.getNumber());
    }

    @Test
    void setNumber() {
    }
}