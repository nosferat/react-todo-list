import React from 'react'
import { CheckMark } from './CheckMark'
import { TodoListContext } from '../TodoListContext'

export const TodoItem = ({title, done, id}) => {

  const {toggleTodo, removeTodo} = React.useContext(TodoListContext)

  const handleToggleTodo = React.useCallback(() => {
    toggleTodo(id)
  }, [toggleTodo])

  const handleRemoveTodo = React.useCallback(() => {
    removeTodo(id)
  }, [removeTodo])

  const css = [
    true ? 'todo-item' : '',
    done ? 'todo-done' : '',
  ]
  .join(' ')

  return (
    <div className={css}>
      <CheckMark
        title={title} checked={done} onChange={handleToggleTodo}
      />
      <img className="todo-trash" src="trash.svg" alt="" onClick={handleRemoveTodo} />
    </div>
  )
}
