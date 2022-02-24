import './TodoAdd.css'
function TodoAdd(){
    return (
        <form className='TodoAdd'>
            <input type="text" placeholder="add details"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoAdd