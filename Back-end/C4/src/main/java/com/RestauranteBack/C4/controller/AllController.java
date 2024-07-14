package com.RestauranteBack.C4.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.RestauranteBack.C4.models.Items;
import com.RestauranteBack.C4.models.Pedidos;
import com.RestauranteBack.C4.models.Producto;
import com.RestauranteBack.C4.models.Usuario;
import com.RestauranteBack.C4.repository.ItemsRepo;
import com.RestauranteBack.C4.repository.PedidosRepo;
import com.RestauranteBack.C4.repository.ProductoRepo;
import com.RestauranteBack.C4.services.RegistroServicio;

@RestController
// coneccion del fornt
@CrossOrigin("http://localhost:5173/")
public class AllController {

// injeccion de los Repositorios y servicios
    @Autowired
    private RegistroServicio registroServicio;
    @Autowired
    private PedidosRepo rPedidosRepo;
    @Autowired
    private ProductoRepo productoRepo;
    @Autowired
    private ItemsRepo  itemsRepo;

    @PostMapping("/registro")
    public ResponseEntity<String> postRegistro(@RequestBody Usuario nuevoRegistro){
        boolean validate = registroServicio.verificar(nuevoRegistro);
        if(validate){
            return ResponseEntity.status(HttpStatus.OK).body("valido");
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("no se encontro");
        }
        
    }
    @GetMapping("/items")
    public List<Items> getProducto(){
        return itemsRepo.findAll();
    }

    @GetMapping("/pedido")
    public List<Pedidos> getPedido(){
        return  rPedidosRepo.findAll();
    }
    @GetMapping("/pedido/{id}")
    public Optional<Pedidos> getIdPedido(@PathVariable Long id){
        return rPedidosRepo.findById(id);
    } 


    @PostMapping("/pedido")
    public Pedidos postPedidos(@RequestBody Pedidos newPedido){
        return rPedidosRepo.save(newPedido);
    }
    @DeleteMapping("/pedido/eliminar/{id}")
    public void deletePedido(@PathVariable Long id){  
        rPedidosRepo.deleteById(id);
        return;
    }

}
