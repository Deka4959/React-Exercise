
import { useReducer } from "react";

function reducer(state ,action){
if(action === "increment"){
  return state + 1;

}
if(action === "decrement"){
  return state - 1

}
if( action ==="Reset"){
return 0;
}



return state;
}

function App() {
  const  [count , dispatch] =useReducer(reducer, 0)
    const  [countb , setCount] =useReducer(reducer, 0)
  return (
    <>
    <h1>counter</h1>
    <p>{count}</p>
    <h1>counter A</h1>
    <button onClick={()=> dispatch("increment")}>
      A</button>
      <button onClick={()=> dispatch("decrement")}>
        A-
      </button>

<h1>Counter B</h1>
       <p>{countb}</p>
      
      <button onClick={()=> setCount("increment")}>
      B</button>
      <button onClick={()=> setCount("decrement")}>
        B-
      </button>
      <button
  onClick={() => {
    dispatch("Reset");
    setCount("Reset");
  }}
>
  Reset Both
</button>
      
    </>
  );
}

export default App;