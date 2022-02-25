import { useState } from 'react'
import './TodoItem.css'
function TodoItem({todo, completed, completeTodo}){
    return(
       <div className="TodoItem">
           <input 
                type="checkbox"
                checked={completed}
                onChange={() => {
                    completeTodo(todo)
                }}
            />
           <p className={completed ? "completed" : ""}>{todo}</p>
       </div> 
    )
}

export default TodoItem