import React, { useReducer } from 'react'
const initialState = {
    firstCounter : 0,
};
const reducer = (state, action) => {
   switch(action.type) {
    case "increament":
        return {...state, firstCounter : state.firstCounter + action.value};
    case "decrement": 
        return {...state, firstCounter : state.firstCounter - action.value}
    default:
        return state;
   }
}

const ComplexState = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button onClick={() => dispatch({type : "increament", value: 1})} >Increment</button>
      <button onClick={() => dispatch({type : "decrement", value: 1})}  >Decrement</button>
    </div>
  )
}

export default ComplexState
