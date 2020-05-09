import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos}) => {

  return (
    <div className="todo-list">
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </div>
  )
}
