import React from 'react'
import { CheckMark } from './CheckMark'
import { Context } from '../Context'

export const TodoItem = ({title, done, id}) => {

  const {toggleTodo, removeTodo} = React.useContext(Context)

  const css = [
    true ? 'todo-item' : '',
    done ? 'todo-done' : '',
  ]
  .join(' ')

  return (
    <div className={css}>
      <CheckMark
        title={title} checked={done} onChange={() => toggleTodo(id)}
      />
      <img className="todo-trash" src="trash.svg" alt="" onClick={() => removeTodo(id)} />
    </div>
  )
}
