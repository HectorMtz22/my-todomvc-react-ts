import Input from 'components/Input'
import { useListTodos } from 'context/ListTodos'
import { Todo } from 'models/todo'
import { ReactElement } from 'react'

export default function Header (): ReactElement {
  const { addTodo } = useListTodos()
  const handleSubmit = (title: string): void => {
    const id = crypto.randomUUID()
    const data: Todo = {
      id,
      title,
      isCompleted: false
    }
    addTodo(data)
  }
  return (
    <header className='header'>
      <h1>Todos</h1>
      <Input
        className='new-todo'
        placeholder='What needs to be done?'
        onSubmit={handleSubmit}
        onBlur={null}
      />
    </header>
  )
}
