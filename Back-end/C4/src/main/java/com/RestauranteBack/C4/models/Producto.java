package com.RestauranteBack.C4.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Producto {
    @Id
    @Column(name =  "Id_producto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_item")
    private Long Id_item;

    @Column(name = "nombre_item")
    private String nombre_item;
    
    @Column(name = "precio_item")
    private double precio_item;

    @Column(name = "categoria")
    private String categoria;

    // @ManyToOne()
    // private Pedidos pedidos;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId_item() {
        return this.Id_item;
    }

    public void setId_item(Long Id_item) {
        this.Id_item = Id_item;
    }

    public String getNombre_item() {
        return this.nombre_item;
    }

    public void setNombre_item(String nombre_item) {
        this.nombre_item = nombre_item;
    }

    public double getPrecio_item() {
        return this.precio_item;
    }

    public void setPrecio_item(double precio_item) {
        this.precio_item = precio_item;
    }

    public String getCategoria() {
        return this.categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    // public Pedidos getPedidos() {
    //     return this.pedidos;
    // }

    // public void setPedidos(Pedidos pedidos) {
    //     this.pedidos = pedidos;
    // }


}
