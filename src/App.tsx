import { ReactElement } from 'react'
import ListTodos from './components/ListTodos'
import { ListTodosProvider } from 'context/ListTodos'
import Header from 'components/Header'

function App (): ReactElement {
  return (
    <ListTodosProvider>
      <div className='todoapp'>
        <Header />
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
