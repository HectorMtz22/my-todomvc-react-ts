import ItemTodo from 'components/ItemTodo'
import { useListTodos } from 'context/ListTodos'
import { ReactElement } from 'react'
import { Todo } from 'models/todo'

export default function ListTodos (): ReactElement {
  const { todos } = useListTodos()
  return (
    <section className='main'>
      <input id='toggle-all' type='checkbox' className='toggle-all' />
      <label htmlFor='toggle-all' />

      <ul className='todo-list'>
        {todos.map((todo: Todo) => (
          <ItemTodo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
          />
        ))}
      </ul>
    </section>
  )
}
