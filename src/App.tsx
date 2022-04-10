import { ReactElement } from 'react'
import ListTodos from './components/ListTodos'
import { ListTodosProvider } from 'context/ListTodos'
import Header from 'components/Header'
import Footer from 'components/Footer'

function App (): ReactElement {
  return (
    <div className='todoapp'>
      <ListTodosProvider>
        <Header />
        <ListTodos />
        <Footer />
      </ListTodosProvider>
    </div>
  )
}

export default App
