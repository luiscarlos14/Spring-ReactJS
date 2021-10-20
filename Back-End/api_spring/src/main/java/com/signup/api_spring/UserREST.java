package com.signup.api_spring;

import com.signup.api_spring.database.RepositorioUser;
import com.signup.api_spring.entidade.User;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")

public class UserREST {

    @Autowired
    private RepositorioUser repositorio;

    @GetMapping
    public List<User> list(){
        return repositorio.findAll();
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody User user){
        repositorio.save(user);
    }
    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void alter(@RequestBody User user){
        if(user.getId() > 0)
            repositorio.save(user);
    }
    @DeleteMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void drop(@RequestBody User user){
        repositorio.delete(user);
    }
}
