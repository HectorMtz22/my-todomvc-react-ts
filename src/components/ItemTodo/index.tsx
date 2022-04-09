import { Todo } from 'models/todo'
import { ReactElement, useEffect, useState } from 'react'
import Input from 'components/Input'
import { useListTodos } from 'context/ListTodos'

export default function ItemTodo (todo: Todo): ReactElement {
  const { editTodo } = useListTodos()
  const [editingMode, setEditingMode] = useState(false)

  useEffect(() => { setEditingMode(false) }, [todo])

  const handleCheckClick = (): void => {

  }

  const handleLabelClick = (): void => {
    setEditingMode(true)
  }
  const handleDestroyClick = (): void => {

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

  const className = editingMode ? 'todo-item editing' : 'todo-item'
  return (
    <li className={className}>
      <div className='view'>
        <input type='checkbox' className='toggle' onClick={handleCheckClick} />
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
