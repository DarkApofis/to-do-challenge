import './TodoOptions.css'
function TodoOptions({setOption, option}){
    return(
        <ul className="TodoOptions">
            <li 
                className={(option === "All") && "All" || ""} 
                onClick={() => setOption("All")}
            >
                All
            </li>
            <li
                className={(option === "Active") && "Active" || ""}
                onClick={() => setOption("Active")}
            >
                Active
            </li>
            <li 
                className={(option === "Completed") && "Completed" || ""}
                onClick={() => setOption("Completed")}
            >
                Completed
            </li>
        </ul>
    )
}

export default TodoOptions