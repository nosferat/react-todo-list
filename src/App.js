import React from 'react'
import { TodoList } from './components/TodoList'
import { Context } from './Context'
import './app.css'

export const App = () => {

  const [todos, setTodos] = React.useState([])
  const [todoTitle, setTodoTitle] = React.useState('')

  React.useEffect(() =>
    setTodos(JSON.parse(localStorage.getItem('todos')) || []),
    []
  )

  React.useEffect(() =>
    localStorage.setItem('todos', JSON.stringify(todos)),
    [todos]
  )

  const addTodo = key => {
    if(key === 'Enter' && todoTitle !== '') {
      const todo = {
        title: todoTitle, done: false, id: Date.now()
      }
      setTodos(prev => [...prev, todo])
      setTodoTitle('')
    }
  }

  const toggleTodo = id => {
    setTodos(
      todos.map(item => {
        if(item.id === id) {
          item.done = !item.done
        }
        return item
      })
    )
  }

  const removeTodo = id => {
    setTodos(todos.filter(item => item.id !== id))
  }

  return (
    <Context.Provider value={{toggleTodo, removeTodo}}>
      <div className="mainwrap">
        <div className="content-area">
          <div className="todo-header">Todo List</div>
          <input
            className="todo-title"
            value={todoTitle}
            onChange={e => setTodoTitle(e.target.value)}
            onKeyPress={e => addTodo(e.key)}
          />
          <TodoList todos={todos} />
        </div>
      </div>
    </Context.Provider>
  )
}
