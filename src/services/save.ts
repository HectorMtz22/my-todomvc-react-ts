import { Todo } from 'models/todo'

export async function save (todos: Todo[]): Promise<void> {
  return localStorage.setItem('todoapp', JSON.stringify(todos))
}
