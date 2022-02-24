import { useState } from 'react'
import TodoHeader from './containers/TodoHeader/TodoHeader'
import TodoOptions from './components/TodoOptions/TodoOptions'
import TodoAdd from './components/TodoAdd/TodoAdd'
// import './App.css'

function App() {
  return (
    <>
      <TodoHeader>
        <TodoOptions/>
      </TodoHeader>
      <TodoAdd/>
    </>
  )
}

export default App
