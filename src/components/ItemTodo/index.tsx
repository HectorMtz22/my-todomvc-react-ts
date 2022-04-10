import { Todo } from 'models/todo'
import { ReactElement, useEffect, useState } from 'react'
import Input from 'components/Input'
import { useListTodos } from 'context/ListTodos'

export default function ItemTodo (todo: Todo): ReactElement {
  const { editTodo, removeTodo } = useListTodos()
  const [editingMode, setEditingMode] = useState(false)
  const [completed, setCompleted] = useState(todo.isCompleted)

  useEffect(() => { setEditingMode(false) }, [todo])

  const handleCheckClick = (): void => {
    const data: Todo = {
      id: todo.id,
      title: todo.title,
      isCompleted: !completed
    }
    setCompleted(!completed)
    editTodo(data)
  }

  const handleLabelClick = (): void => {
    setEditingMode(true)
  }
  const handleDestroyClick = (): void => {
    removeTodo(todo.id)
  }

  const handleSubmit = (title: string): void => {
    setEditingMode(false)
    if (title === '') return
    const data: Todo = {
      id: todo.id,
      title,
      isCompleted: todo.isCompleted
    }
    editTodo(data)
  }

  let className = 'todo-item '
  if (editingMode) className += 'editing '
  if (completed) className += 'completed '
  return (
    <li className={className}>
      <div className='view'>
        <input type='checkbox' className='toggle' onChange={handleCheckClick} checked={completed} />
        <label onDoubleClick={handleLabelClick}>{todo.title}</label>
        <button className='destroy' onClick={handleDestroyClick} />
      </div>
      {
        editingMode &&
          <Input
            id={todo.id}
            className='edit'
            defaultValue={todo.title}
            onSubmit={handleSubmit}
          />
      }
    </li>
  )
}
