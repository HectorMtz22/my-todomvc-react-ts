import { Todo } from 'models/todo'
import { createContext, ReactElement, useContext, useState } from 'react'
import initialTodos from 'data/initialTodos.json'

interface ContextModel {
  todos: Todo[]
  editTodo: (t: Todo) => void
  addTodo: (t: Todo) => void
  removeTodo: (id: number) => void
}

const Context = createContext<ContextModel | undefined>(undefined)

export function useListTodos (): any {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useListTodos must be used inside a Provider')
  }

  return context
}

export function ListTodosProvider ({ children }: any): ReactElement {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const editTodo = (todo: Todo): void => {
    const newData = todos.map(item => item.id === todo.id
      ? { ...item, title: todo.title, isCompleted: todo.isCompleted }
      : item
    )
    setTodos(newData)
  }

  const addTodo = (todo: Todo): void => {
    setTodos(prevState => prevState.concat(todo))
  }

  const removeTodo = (id: number): void => {
    setTodos(prevState => prevState
      .filter(todo => todo.id !== id)
    )
  }
  return (
    <Context.Provider value={{ todos, editTodo, addTodo, removeTodo }}>
      {children}
    </Context.Provider>
  )
}
