import React from "react";
import { data } from "./PropParentContextAPI";
import { mail } from "./PropParentContextAPI";

const ChildC = () => {
  return (
    <div>
      <data.Consumer>
      {
        (name) => {
          return (
                 <mail.Consumer>
                  {
                    (email) => {
                      return (
                        <h1>My name is {name} and my email id is {email}</h1>
                      )
                    }
                  }
                 </mail.Consumer>
          )
        }
      }
      </data.Consumer>
    </div>
  );
};

export default ChildC
