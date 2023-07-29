import React, { useContext } from "react";
import { data } from "./UseContext";
import { mail } from "./UseContext";

const ChildC = () => {
  const name = useContext(data)
  const email = useContext(mail)
  return (
    <div>
       <h1>My name is {name} and my email id is {email}</h1>
    </div>
  );
};

export default ChildC
