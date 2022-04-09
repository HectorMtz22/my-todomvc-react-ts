import { ReactElement } from 'react'
import ListTodos from './components/ListTodos'
import { ListTodosProvider } from 'context/ListTodos'
import Header from 'components/Header'
import TodoCount from 'components/TodoCount'

function App (): ReactElement {
  return (
    <ListTodosProvider>
      <div className='todoapp'>
        <Header />
        <ListTodos />

        <footer className='footer'>
          <TodoCount />
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
