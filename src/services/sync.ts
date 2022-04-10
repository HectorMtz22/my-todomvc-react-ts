import { Todo } from 'models/todo'
import initialTodos from 'data/initialTodos.json'

export async function sync (): Promise<Todo[]> {
  const res = await localStorage.getItem('todoapp')
  if (res === null) return initialTodos
  return JSON.parse(res)
}
