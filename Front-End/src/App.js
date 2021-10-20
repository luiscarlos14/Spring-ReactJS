import React, {useState} from "react";
import styled from "styled-components";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import Formulario from "./components/Form";
import List from "./components/List";

const App = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container>
      
      <Button color="danger" onClick={toggle}>Adicionar Novo</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Cadastrar novo usuário</ModalHeader>
        <ModalBody>
          <Formulario />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
   
      <List />
    </Container>
  );
}

export default App;

const Container = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5% 15%;

`;

