import { Todo } from 'models/todo'
import { useState } from 'react'

interface TodosHook {
  todos: Todo[]
  addTodo: (t: Todo) => void
  removeTodo: (id: number) => void
}

export default function useTodo (): TodosHook {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo): void => {
    setTodos(prevState => prevState.concat(todo))
  }

  const removeTodo = (id: number): void => {
    setTodos(prevState => prevState
      .filter(todo => todo.id === id)
    )
  }

  return { todos, addTodo, removeTodo }
}
