import useLocalStorage from './hooks/useLocalStorage'
import TodoHeader from './containers/TodoHeader/TodoHeader'
import TodoMainContent from './containers/TodoMainContent/TodoMainContent'
import TodoOptions from './components/TodoOptions/TodoOptions'
import TodoAdd from './components/TodoAdd/TodoAdd'
import TodoItem from './components/TodoItem/TodoItem'
import { useState } from 'react'
// import './App.css'

function App() {
  const [option, setOption] = useState("All")
  const {item: todos, saveItem: saveTodos} = useLocalStorage("TODOS", []);

  const activeTodos = todos.filter(todo => todo.completed === false);
  const completedTodos = todos.filter(todo => todo.completed === true);

  const addTodo = (task) => {
    const todoIndex = todos.findIndex(todo => todo.todo === task)
    const newTodo = [...todos]
    if(task.length && todoIndex === -1){
      newTodo.push({
        todo: task,
        completed: false
      })
    }
    saveTodos(newTodo)
  }

  const completeTodo = (task) => {
    const todoIndex = todos.findIndex(todo => todo.todo === task)
    const newTodo = [...todos]
    if(newTodo[todoIndex].completed){
      newTodo[todoIndex].completed = false
    }else{
      newTodo[todoIndex].completed = true
    }
    saveTodos(newTodo)
  }

  const deleteTodo = (task) => {
    const todoIndex = todos.findIndex(todo => todo.todo === task)
    const newTodo = [...todos]
    newTodo.splice(todoIndex, 1)
    saveTodos(newTodo)
  }

  return (
    <>
      <TodoHeader>
        <TodoOptions setOption={setOption} option={option}/>
      </TodoHeader>
      <TodoMainContent>
        <TodoAdd addTodo={addTodo} setTodos={saveTodos}/>
        {option === "All" && (
          todos.map(todo => (
            <TodoItem key={crypto.randomUUID()} {...todo} completeTodo={completeTodo}/>
          ))
        )}
        {option === "Active" && (
          activeTodos.map(todo => (
            <TodoItem key={crypto.randomUUID()} {...todo} completeTodo={completeTodo}/>
          ))
        )}
        {option === "Completed" && (
          completedTodos.map(todo => (
            <TodoItem option={option} key={crypto.randomUUID()} {...todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
          ))
        )}
      </TodoMainContent>
    </>
  )
}

export default App
