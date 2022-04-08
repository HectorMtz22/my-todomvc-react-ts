import { Todo } from 'models/todo'
import { useEffect, useState } from 'react'

import initialTodos from 'data/initialTodos.json'

interface TodosHook {
  todos: Todo[]
  addTodo: (t: Todo) => void
  removeTodo: (id: number) => void
  editTodo: (t: Todo) => void
}

export default function useTodos (): TodosHook {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    setTodos(initialTodos)
  }, [])

  const addTodo = (todo: Todo): void => {
    setTodos(prevState => prevState.concat(todo))
  }

  const removeTodo = (id: number): void => {
    setTodos(prevState => prevState
      .filter(todo => todo.id === id)
    )
  }

  const editTodo = (todo: Todo): void => {
    const newData = todos.slice()
    const index = newData.findIndex(item => item.id === todo.id)
    newData[index] = todo
    setTodos(newData)
  }

  return { todos, addTodo, removeTodo, editTodo }
}
