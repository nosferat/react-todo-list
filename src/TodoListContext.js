import React from 'react'

export const TodoListContext = React.createContext({
  toggleTodo() { throw new Error('Not implemented') },
  removeTodo() { throw new Error('Not implemented') },
})
