
import { useState } from "react";


function App() {


  const [isOn , setIsOn] = useState(false)
const ToggoleChange=()=>{
setIsOn(!isOn)

};

  

  return (

    <>
<button onClick={ToggoleChange}>ON/OFF</button>

<h2>{isOn ? "ON 🟢" : " OFF 🔴"}</h2>
    


    
   
    
    </>
    
  );
}

export default App;