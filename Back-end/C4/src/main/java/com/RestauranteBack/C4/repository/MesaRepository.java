package com.RestauranteBack.C4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RestauranteBack.C4.models.Mesas;

public interface MesaRepository extends JpaRepository<Mesas, Long>{
    
}
