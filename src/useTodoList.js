import React from 'react'

export const useTodoList = () => {

  const [todos, setTodos] = React.useState([])

  React.useEffect(() =>
    setTodos(JSON.parse(localStorage.getItem('todos')) || []),
    []
  )

  React.useEffect(() =>
    localStorage.setItem('todos', JSON.stringify(todos)),
    [todos]
  )

  const addTodo = React.useCallback(title => {
    if(title === '') {
      return
    }
    const todo = {
      title, done: false, id: Date.now()
    }
    setTodos(prev => [...prev, todo])
  }, [setTodos])

  const toggleTodo = React.useCallback(id => {
    setTodos(
      prev =>
        prev.map(item => {
          if(item.id === id) {
            item.done = !item.done
          }
          return item
        })
    )
  }, [setTodos])

  const removeTodo = React.useCallback(id => {
    setTodos(todos.filter(item => item.id !== id))
  }, [setTodos, todos])

  return {todos, addTodo, toggleTodo, removeTodo}
}
