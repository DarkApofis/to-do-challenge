import { useState } from 'react'
import './TodoAdd.css'
function TodoAdd({addTodo}){

    const [todo, setTodo] = useState("")

    return (
        <form className='TodoAdd'>
            <input 
                value={todo} 
                type="text" 
                placeholder="add details"
                onChange={(event) => (
                    setTodo(event.target.value)
                )}
            />
            <button 
                onClick={() => addTodo(todo)} 
                type="button">Add</button>
        </form>
    )
}

export default TodoAdd