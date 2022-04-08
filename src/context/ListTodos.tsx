import { Todo } from 'models/todo'
import { createContext, ReactElement, useContext } from 'react'
import initialTodos from 'data/initialTodos.json'

const Context = createContext([])

function useListTodos (): Todo[] {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useListTodos must be used inside a Provider')
  }
  const todos = context
  return { todos }
}

function ListTodosProvider ({ children }): ReactElement {
  return (
    <Context.Provider value={initialTodos}>
      {children}
    </Context.Provider>
  )
}

export { useListTodos, ListTodosProvider }
