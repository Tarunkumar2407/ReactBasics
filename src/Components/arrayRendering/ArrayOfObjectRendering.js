import React from "react";
import Table from 'react-bootstrap/Table';

const ArrayObjectRendering = () => {
  const array = [
    {
      name: "Tarun",
      gender: "male",
      age: "27",
      email: "tarun@gmail.com",
      phone: "666",
    },
    {
      name: "Tarun",
      gender: "male",
      age: "27",
      email: "tarun@gmail.com",
      phone: "666",
    },
    {
      name: "Ankur",
      gender: "male",
      age: "28",
      email: "Ankur@gmail.com",
      phone: "666",
    },
    {
      name: "Rahul",
      gender: "male",
      age: "29",
      email: "Rahul@gmail.com",
      phone: "666",
    },
    {
      name: "Ravi",
      gender: "male",
      age: "24",
      email: "Ravi@gmail.com",
      phone: "666",
    },
  ];
  return (
    <div>
     <h1>Array Object Rendering With Table</h1>
      <Table striped bordered hover variant="dark">
       <thead>
       <tr>
          <td>NAME</td>
          <td>GENDER</td>
          <td>AGE</td>
          <td>EMAIL ID</td>
          <td>PHONE</td>
        </tr>
       </thead>
       <tbody>
       {array.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          );
        })}
       </tbody>
        
      </Table>
    </div>
  );
};

export default ArrayObjectRendering;

