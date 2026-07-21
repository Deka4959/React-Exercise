   import { useState } from "react";
   
   const TodoList =()=>{


    const [todo, setTodos] = useState([])
    const [inputValue , setInputValue]= useState("")
    const handleChange=()=>{

        const newTodo ={

            id : crypto.randomUUID,
            text: inputValue,
            completed: false
        }
        setTodos([...todo ,newTodo])
        setInputValue("")



    }


    return (
    
    <div>
        <h1>To - Do - List</h1>  
        <input type="text" placeholder="Enter New List"  onChange={(e)=> setInputValue(e.target.value)} value={inputValue}/>
        <button onClick={handleChange}>Add</button>
        <ul>

            {
                todo.map(todo=>(
                    <li>{todo.text}</li>

                ))



            }

            
        </ul>
    
     </div>

    )

}
export default TodoList;