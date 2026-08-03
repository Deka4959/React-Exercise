import { useState } from "react";


function User(){


const [user, setUser]= useState([])

const handleBtn=()=>{
setUser([
    {
    id:crypto.randomUUID(),
     name: "Deka",
      email: "Deka88@gmail.com"

      }


])


};

return <>
<button onClick={handleBtn}>Display Data</button>

    <ul>
        {
    user.map((item)=> <li key={item.id}>
        {item.id}
        {item.name}
        {item.email}


        </li>)
        }
    </ul>


</>




}

export  default User