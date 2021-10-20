package com.signup.api_spring.database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.signup.api_spring.entidade.User;

public interface RepositorioUser extends JpaRepository<User,Long> {
    

    
}
