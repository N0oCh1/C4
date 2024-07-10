package com.RestauranteBack.C4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RestauranteBack.C4.models.Pedidos;

public interface PedidoRepository extends JpaRepository<Pedidos, Long>{
    
}
