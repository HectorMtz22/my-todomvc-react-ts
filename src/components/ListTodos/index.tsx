import ItemTodo from 'components/ItemTodo'
import useTodos from 'hooks/useTodos'
import { ReactElement } from 'react'

export default function ListTodos (): ReactElement {
  const { todos } = useTodos()
  return (
    <section className='main'>
      <input id='toggle-all' type='checkbox' className='toggle-all' />
      <label htmlFor='toggle-all' />

      <ul className='todo-list'>
        {todos.map(todo => (
          <ItemTodo key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  )
}
