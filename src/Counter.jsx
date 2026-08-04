import React, { useState } from "react";

function Counter() {
  const [count ,setCount]= useState(0)



  const incremenEvent=()=>{
    setCount((prev) => prev + 1);



  }
   const decrementEvent=()=>{
    setCount ((prev)=> prev - 1)
    


    
  }
  
  return (
    <>
    <h1>Counter</h1>
    <p>{count}</p>
    <button onClick={incremenEvent}>Increment</button>
 <button onClick={decrementEvent} disabled ={count === 0}>Decrement</button>



     </>
  );


}

export default Counter;