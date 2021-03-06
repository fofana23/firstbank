package com.fofana23.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class UserControllerAdvice extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(BusinessException.class)
		public ResponseEntity<Object> exceptionHandler(BusinessException exception, WebRequest request) {
			return new ResponseEntity<>(new Error(exception.getMessage(), new Date()), HttpStatus.NOT_FOUND);
	}

}
