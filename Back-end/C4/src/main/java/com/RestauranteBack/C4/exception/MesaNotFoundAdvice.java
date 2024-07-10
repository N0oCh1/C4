package com.RestauranteBack.C4.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class MesaNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(MesaNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> exceptionHandler(MesaNotFound exception){
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("errorMessange", exception.getMessage());
        return errorMap;
    }
    
}
