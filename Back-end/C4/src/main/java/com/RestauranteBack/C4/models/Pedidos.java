package com.RestauranteBack.C4.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "pedidos")
public class Pedidos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="pedidos_id")
    private Long id;
    @OneToOne
    @PrimaryKeyJoinColumn
    private Mesas mesa;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Mesas getMesa() {
        return this.mesa;
    }

    public void setMesa(Mesas mesa) {
        this.mesa = mesa;
    }

}
