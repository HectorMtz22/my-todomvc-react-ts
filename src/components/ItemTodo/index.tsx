import { Todo } from 'models/todo'
import { ReactElement, useState } from 'react'
import Input from 'components/Input'

export default function ItemTodo (todo: Todo): ReactElement {
  const [editingMode, setEditingMode] = useState(false)

  const handleCheckClick = (): void => {

  }

  const handleLabelClick = (): void => {
    setEditingMode(true)
  }
  const handleDestroyClick = (): void => {

  }
  const className = editingMode ? 'todo-item editing' : 'todo-item'
  return (
    <li className={className}>
      <div className='view'>
        <input type='checkbox' className='toggle' onClick={handleCheckClick} />
        <label onDoubleClick={handleLabelClick}>{todo.title}</label>
        <button className='destroy' onClick={handleDestroyClick} />
      </div>
      <Input id={todo.id} className='edit' defaultValue={todo.title} />
    </li>
  )
}
