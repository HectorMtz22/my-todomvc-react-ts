import { Todo } from 'models/todo'
import { createContext, ReactElement, useContext, useState } from 'react'
import initialTodos from 'data/initialTodos.json'

const Context = createContext<Todo[]>()

interface HookListTodos {

  editTodo: (t: Todo) => void
}

export function useListTodos (): any {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useListTodos must be used inside a Provider')
  }

  return context
}

export function ListTodosProvider ({ children }: any): ReactElement {
  const [todos, setTodos] = useState(initialTodos)

  const editTodo = (todo: Todo): void => {
    const newData = todos.map(item => item.id === todo.id
      ? { ...item, title: todo.title }
      : item
    )
    console.log(newData)
    setTodos(newData)
  }

  return (
    <Context.Provider value={{ editTodo, todos }}>
      {children}
    </Context.Provider>
  )
}
