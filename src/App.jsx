import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'

const DUMMY_TODO = [
  {
    id: nanoid(),
    title: 'belajar react JS',
    isCompleted: false
  }
]

function App() {
  
  const [todos, setTodos] = useState(DUMMY_TODO)
  const [newTodo, setNewTodo] = useState('')

  function addNewTodo(){
    const updatedTodos = [...todos]
    const objTodo = {
      id: nanoid(),
      title: newTodo,
      isCompleted: false
    }

    updatedTodos.push(objTodo)
    setTodos(updatedTodos)
    setNewTodo('')
  }

  return (
    <>
      <h1>Todo App</h1>
      <input 
      type='text' 
      placeholder='Isi todo disini' 
      value={newTodo} 
      onChange={event => setNewTodo(event.target.value)}/>
      <button onClick={() => addNewTodo()}>create</button>
      <ul>
        {
          todos.map((todo) =>(
            <li key={todo.id} className='todo-item'>
              <input type='checkbox'/>
              {todo.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App