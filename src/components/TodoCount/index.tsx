import { useListTodos } from 'context/ListTodos'
import React from 'react'
import { Todo } from 'models/todo'

export default function TodoCount (): React.ReactElement {
  const { todos } = useListTodos()
  const count = (): number => {
    return todos.filter((item: Todo) => !item.isCompleted).length
  }
  return (
    <span className='todo-count'>
      <strong>{count()} left</strong>
    </span>
  )
}
