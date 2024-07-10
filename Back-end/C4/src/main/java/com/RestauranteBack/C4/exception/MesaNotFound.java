package com.RestauranteBack.C4.exception;

public class MesaNotFound extends RuntimeException {
    public MesaNotFound(Long id){
        super("la mesa no existe");
    }
}
