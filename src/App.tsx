import { ReactElement } from 'react'
import ListTodos from './components/ListTodos'
import { ListTodosProvider } from 'context/ListTodos'

function App (): ReactElement {
  return (
    <ListTodosProvider>
      <div className='todoapp'>
        <header className='header'>
          <h1>Todos</h1>
          <input
            type='text'
            className='new-todo'
            placeholder='What needs to be done?'
          />
        </header>
        <ListTodos />

        <footer className='footer'>
          <span className='todo-count'>
            {/* ! TODO  */}
            <strong>10 left</strong>
          </span>
          <ul className='filters'>
            <li><a href='#'>All</a></li>
            <li><a href='#'>Active</a></li>
            <li><a href='#'>Completed</a></li>
          </ul>
        </footer>
      </div>
    </ListTodosProvider>
  )
}

export default App
