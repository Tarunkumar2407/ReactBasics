import React from "react";

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
      <table border="2">
        <tr>
          <td>NAME</td>
          <td>GENDER</td>
          <td>AGE</td>
          <td>EMAIL ID</td>
          <td>PHONE</td>
        </tr>
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
        <td></td>
      </table>
    </div>
  );
};

export default ArrayObjectRendering;

