import React, { useState, useEffect } from "react";

import { ListUser } from "../services/userController";

import { Table } from "reactstrap";

const List = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    ListUser()
      .then((result) => {
        setList(result);
      })
      .catch();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th>Bairro</th>
          <th>Número</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Email Comercial</th>
        </tr>
      </thead>
      <tbody>
        {list.map((row) => (
          <>
            <tr  key={row.id}>
              <th scope="row">
                {row.id}
              </th>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.address}</td>
              <td>{row.district}</td>
              <td>{row.address_number}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>{row.business_email}</td>
            </tr>
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default List;
