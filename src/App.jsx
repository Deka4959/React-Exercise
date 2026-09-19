import { useState } from "react";


function App() {

  const [formData, setFormData] =useState({
    userName:"",
    Email:"",
    checkbox:""
  })

  const handleSubmit=(event)=>{
    
    event.preventDefault();
    console.log("FormData")

  }
  const hanleChange=(event)=>{

    const {name,value} = event.target

    setFormData((prevData)=> ({...prevData , [name]: value}))
   

  }

 
 
  

return (
 
<form onSubmit={handleSubmit}>
<input type="text"name="userName" value={formData.userName} onChange={hanleChange} placeholder="enter uour username"/>

<input type="text"name="Email" value={formData.Email} onChange={hanleChange} placeholder="enter your email"/>

<input type="checkbox" name="checkbox"  value={formData.checkbox} onChange={hanleChange}/>

<button type="submit" className="bg-amber-200 p-6 rounded-2xl">Submit</button>

</form>

 
 
  

)

}


export default App;