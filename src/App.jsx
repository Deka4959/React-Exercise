import { useEffect , useState } from "react";

 

function App() {
const [name , setName]= useState("");
const [salaan , setSalaan]= useState("assalama aleiukum");
useEffect(()=>{

  document.title= `${name} : ${salaan}`;

  console.log(`${name}, ${salaan}`)


}, [name , salaan]);

  




  return(
    <>   
    <h2>Enter your Name</h2>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
    <h2>Greating</h2>
     <input type="text" value={salaan} onChange={(e)=> setSalaan(e.target.value)}/>
  


</>

  ) ;
  
}

export default App;