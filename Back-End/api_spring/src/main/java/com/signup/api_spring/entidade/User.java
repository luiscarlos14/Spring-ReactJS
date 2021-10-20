package com.signup.api_spring.entidade;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   @Column(nullable = false)
   private String name;
   @Column(nullable = false)
   private String email;
   @Column(nullable = false)
   private String phone;
   @Column(nullable = false)
   private String address;
   @Column(nullable = false)
   private String district;
   @Column(nullable = false)
   private String address_number;
   @Column(nullable = false)
   private String city;
   @Column(nullable = false)
   private String state;
   @Column(nullable = false)
   private String business_email;
   
public Long getId() {
    return id;
}
public void setId(Long id) {
    this.id = id;
}
public String getName() {
    return name;
}
public void setName(String name) {
    this.name = name;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getPhone() {
    return phone;
}
public void setPhone(String phone) {
    this.phone = phone;
}
public String getAddress() {
    return address;
}
public void setAddress(String address) {
    this.address = address;
}
public String getDistrict() {
    return district;
}
public void setDistrict(String district) {
    this.district = district;
}
public String getAddress_number() {
    return address_number;
}
public void setAddress_number(String address_number) {
    this.address_number = address_number;
}
public String getCity() {
    return city;
}
public void setCity(String city) {
    this.city = city;
}
public String getState() {
    return state;
}
public void setState(String state) {
    this.state = state;
}
public String getBusiness_email() {
    return business_email;
}
public void setBusiness_email(String business_email) {
    this.business_email = business_email;
}


    
}
