package com.RestauranteBack.C4.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.RestauranteBack.C4.exception.MesaNotFound;
import com.RestauranteBack.C4.models.Mesas;
import com.RestauranteBack.C4.models.Pedidos;
import com.RestauranteBack.C4.repository.MesaRepository;
import com.RestauranteBack.C4.repository.PedidoRepository;

@RestController
public class AllController {

    @Autowired
    private MesaRepository mesaRepository;
    @Autowired
    private PedidoRepository pedidoRepository;

    @GetMapping("/mesas")
    List<Mesas>  getMesas() {
        return mesaRepository.findAll();
    }
    @PostMapping("/mesas")
    Mesas postMesas(@RequestBody Mesas newmesa){
        return mesaRepository.save(newmesa);
    }

    @PostMapping("/mesas/{id}/pedidos")
    Pedidos postPedidos(@RequestBody Pedidos newPedido, @PathVariable Long id){
        if (!mesaRepository.existsById(id)){
            throw new MesaNotFound(id);
        }

        return pedidoRepository.save(newPedido);
    }

}
