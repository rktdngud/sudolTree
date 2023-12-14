package com.sudole.sudolTree.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessLogicException.class)
    protected ResponseEntity<ErrorResponse> handleBusinessException(BusinessLogicException e) {
        ExceptionCode exceptionCode = e.getExceptionCode();
        ErrorResponse response = new ErrorResponse(exceptionCode.getCode(), e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.valueOf(exceptionCode.getCode()));



    }
}
