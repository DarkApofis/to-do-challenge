import {AiFillDelete} from 'react-icons/ai'
import './TodoItem.css'
function TodoItem({todo, completed, completeTodo, option, deleteTodo,}){
    return(
       <div className='TodoItem-Container'>
           <div className="TodoItem">
            <input
                id={todo}
                type="checkbox"
                checked={completed}
                onChange={() => {
                    completeTodo(todo)
                }}
            />
            <label htmlFor={todo} className={completed ? "completed" : ""}>{todo}</label>
           </div>
           {option === "Completed" && <AiFillDelete onClick={() => deleteTodo(todo)} size="24px" cursor="pointer"/>}
       </div> 
    )
}

export default TodoItem