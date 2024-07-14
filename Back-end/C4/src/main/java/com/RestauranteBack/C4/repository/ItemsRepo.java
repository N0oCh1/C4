package com.RestauranteBack.C4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RestauranteBack.C4.models.Items;

public interface ItemsRepo extends JpaRepository<Items, Long>{
    
}
