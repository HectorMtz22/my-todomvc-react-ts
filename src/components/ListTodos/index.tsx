import ItemTodo from 'components/ItemTodo'
import { ReactElement } from 'react'

export default function ListTodos (): ReactElement {
  return (
    <section className='main'>
      <input id='toggle-all' type='checkbox' className='toggle-all' />
      <label htmlFor='toggle-all' />

      <ul className='todo-list'>
        <ItemTodo id={1} isCompleted title='Jijos' />

      </ul>
    </section>
  )
}
