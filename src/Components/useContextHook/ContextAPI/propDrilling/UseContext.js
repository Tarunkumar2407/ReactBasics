import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const mail = createContext();
const UseContext = () => {
  const name = "Tarun";
  const email = "tarun@gmail.com";
  return (
    <div>
      <data.Provider value={name}>
        <mail.Provider value={email}>
          <ChildA />
        </mail.Provider>
      </data.Provider>
    </div>
  );
};

export default UseContext;
export { data , mail };
