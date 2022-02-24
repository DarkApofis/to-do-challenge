import './TodoHeader.css'
function TodoHeader({children}){
    return (
        <header className="TodoHeader">
            <h1>#todos</h1>
            {children}
        </header>
    )
}

export default TodoHeader