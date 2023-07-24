import React, {useState} from 'react'
import { Todoform } from './Todoform'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo'


export const Todowrapper = () => {
    const [todos, setTodos] = useState([])


    const addTodo  = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false , isEditing: false}])
      console.log(todos)
    }
   const toggleComplete = id => {
            setTodos(todos.map(todo => todo.id === id? {...todo, completed:!todo.completed} : todo))
       }

       const deleteTodo = id => {
                   setTodos(todos.filter(todo => todo.id !== id))
              }


              const EditTodo = (id, task) => {
                  setTodos(todos.map(todo => todo.id === id? {...todo, task: task, isEditing: true} : todo))
              }
    return (
          <div className='TodoWrapper'>  
          <h1> Get Things Done! 💪</h1>
            <Todoform addTodo= {addTodo}/> 
            {todos.map((todo ,index) => (
            <Todo task= {todo} key={index} toggleComplete={toggleComplete} deleteTodo= { deleteTodo} EditTodo={EditTodo} />
            ))}
     
          </div>
    )
}