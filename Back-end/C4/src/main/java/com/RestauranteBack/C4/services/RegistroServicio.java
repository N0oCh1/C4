package com.RestauranteBack.C4.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import com.RestauranteBack.C4.models.Registro;
import com.RestauranteBack.C4.models.Usuario;
import com.RestauranteBack.C4.repository.RegistroRepository;

@Service
public class RegistroServicio {
    @Autowired
    private RegistroRepository registroRepository;
    
    public Boolean verificar(Usuario user){
      List<Registro> lRegistros = registroRepository.findAll();
      System.out.println(user.getUser());   
      System.out.println(user.getPassword());      
      for(int i=0; i<lRegistros.size(); i++){
        if(lRegistros.get(i).getUserName().equals(user.getUser()) && lRegistros.get(i).getPassword().equals(user.getPassword())){
            return true;
        }
      }
    return false;
    }
}
