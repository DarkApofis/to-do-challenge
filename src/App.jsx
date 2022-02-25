import { useState } from 'react'
import TodoHeader from './containers/TodoHeader/TodoHeader'
import TodoMainContent from './containers/TodoMainContent/TodoMainContent'
import TodoOptions from './components/TodoOptions/TodoOptions'
import TodoAdd from './components/TodoAdd/TodoAdd'
import TodoItem from './components/TodoItem/TodoItem'
// import './App.css'

const defaultTodos = [
  {todo: "Pruebas1", completed: false},
  {todo: "Pruebas2", completed: false},
  {todo: "Pruebas3", completed: false},
]



function App() {
  const [todos, setTodos] = useState(defaultTodos)

  const addTodo = (todo) => {
    const newTodo = [...todos]
    newTodo.push({
        todo,
        completed: false
    })
    setTodos(newTodo)
  }

  const completeTodo = (task) => {
    const todoIndex = todos.findIndex(todo => todo.todo === task)
    const newTodo = [...todos]
    if(newTodo[todoIndex].completed){
      newTodo[todoIndex].completed = false
    }else{
      newTodo[todoIndex].completed = true
    }
    console.log(newTodo)
    setTodos(newTodo)
  }

  return (
    <>
      <TodoHeader>
        <TodoOptions/>
      </TodoHeader>
      <TodoMainContent>
        <TodoAdd addTodo={addTodo} setTodos={setTodos}/>
        {todos.map(todo => (
          <TodoItem key={crypto.randomUUID()} {...todo} completeTodo={completeTodo}/>
        ))}
      </TodoMainContent>
    </>
  )
}

export default App
