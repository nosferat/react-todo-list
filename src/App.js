import React from 'react'
import { TodoList } from './components/TodoList'
import { TodoListContext } from './TodoListContext'
import { useTodoList } from './useTodoList'
import './app.css'

export const App = () => {

  const {todos, addTodo, toggleTodo, removeTodo} = useTodoList()
  const [todoTitle, setTodoTitle] = React.useState('')

  const handleTodoTitle = React.useCallback(e => {
    setTodoTitle(e.target.value)
  }, [setTodoTitle])

  const handleAddTodo = React.useCallback(e => {
    if(e.key === 'Enter' && todoTitle !== '') {
      addTodo(todoTitle)
      setTodoTitle('')
    }
  }, [addTodo, setTodoTitle, todoTitle])

  return (
    <TodoListContext.Provider value={{toggleTodo, removeTodo}}>
      <div className="mainwrap">
        <div className="content-area">
          <div className="todo-header">Todo List</div>
          <input
            className="todo-title"
            value={todoTitle}
            onChange={handleTodoTitle}
            onKeyPress={handleAddTodo}
          />
          <TodoList todos={todos} />
        </div>
      </div>
    </TodoListContext.Provider>
  )
}
