package com.RestauranteBack.C4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RestauranteBack.C4.models.Producto;

public interface ProductoRepo extends JpaRepository<Producto, Long>{
    
}
