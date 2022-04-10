import { Todo } from 'models/todo'
import { createContext, ReactElement, useContext, useState } from 'react'
import initialTodos from 'data/initialTodos.json'
import { Pages } from 'models/page'

interface ContextModel {
  todos: Todo[]
  editTodo: (t: Todo) => void
  addTodo: (t: Todo) => void
  removeTodo: (id: number) => void
  setPage: (p: Pages) => void
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
  const [page, setPage] = useState<Pages>(Pages.all)

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

  const listTodos = (): Todo[] => {
    if (page === Pages.all) return todos
    if (page === Pages.active) return todos.filter(item => !item.isCompleted)
    if (page === Pages.completed) return todos.filter(item => item.isCompleted)
    return todos
  }
  return (
    <Context.Provider value={{ todos: listTodos(), editTodo, addTodo, removeTodo, setPage }}>
      {children}
    </Context.Provider>
  )
}
