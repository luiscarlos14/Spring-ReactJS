import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

import { AddUser } from '../services/userController';

const Formulario = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");

  function refreshPage(status) {
    if (status === 201) {
      alert("Usuário Adicionado");
      document.location.reload();
    } 
  }
  
  function submit (){
        AddUser(name, email, phone, address, district, addressNumber, city, state, businessEmail, refreshPage)
        //console.log(name, email, phone, address, district, addressNumber, city, state, businessEmail)

  }

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="Name">Nome: </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="exemplo: João Batista"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="exemplo: email@email.com"
            onChange={(e) => setEmail(e.target.value)}

          />
        </FormGroup>

        <FormGroup>
          <Label for="Phone">Telefone: </Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="exemplo: 88988123456"
            onChange={(e) => setPhone(e.target.value)}

          />
        </FormGroup>

        <FormGroup>
          <Label for="Address">Endereço: </Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="exemplo: Avenida X"
            onChange={(e) => setAddress(e.target.value)}

          />
        </FormGroup>

        <FormGroup>
          <Label for="District">Bairro: </Label>
          <Input
            type="text"
            name="district"
            id="district"
            placeholder="exemplo: Padre Cícero"
            onChange={(e) => setDistrict(e.target.value)}

          />
        </FormGroup>

        <FormGroup>
          <Label for="AddressNumber">N°: </Label>
          <Input
            type="text"
            name="addressNumber"
            id="AddressNumber"
            placeholder="exemplo: 15"
            onChange={(e) => setAddressNumber(e.target.value)}

          />
        </FormGroup>

        <FormGroup>
          <Label for="City">Cidade: </Label>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="exemplo: Penaforte"
            onChange={(e) => setCity(e.target.value)}

          />
        </FormGroup>

        <FormGroup>
          <Label for="State">Estado: </Label>
          <Input
            type="text"
            name="state"
            id="state"
            placeholder="exemplo: Ceará"
            onChange={(e) => setState(e.target.value)}

          />
        </FormGroup>


        <FormGroup>
          <Label for="BusinessEmail">Email: </Label>
          <Input
            type="text"
            name="businessEmail"
            id="businessEmail"
            placeholder="exemplo: email@company.com"
            onChange={(e) => setBusinessEmail(e.target.value)}

          />
        </FormGroup>
      </Form>
      <Button onClick={()=> submit()} style={{marginTop: 10, marginLeft: "40%"}} color="success">Cadastrar</Button>
    </Container>
  );
};

export default Formulario;

const Container = styled.div`
  padding: 5%;
  flex-direction: column;
`;
