import { useEffect, useState } from "react";

function App() {
  const [time ,setTime] =useState("");

  useEffect(()=>{
    const timeId =setInterval(()=>{
 const todayTime = new Date().toLocaleTimeString()
setTime(todayTime)
    },1000)
   
   

    




    return()=> clearInterval(timeId)

  },[])
  


   
  return (
    <>
    <h1>Digital Clock ⭐⭐</h1>
    <p>Current Time</p>
    <p>Today Time is {time}</p>


    
      

     
    </>
  );
}

export default App;