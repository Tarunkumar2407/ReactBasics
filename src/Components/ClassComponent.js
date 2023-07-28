import React, { Component } from "react";

class ClassComponent extends Component 
{
    render() {
        return (
            <h1>Hello from Class Component</h1>
        )
    }
}

export default ClassComponent

// another way of making class component

// import React from "react";

// export default class ClassComponent extends React.Component 
// {
//     render() {
//         return(
//             <h1>Hello hi am a class component</h1>
//         )
//     }
// }