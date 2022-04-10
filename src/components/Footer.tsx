import { useState } from 'react'
import TodoCount from './TodoCount'
import { Pages } from 'models/page'
import { useListTodos } from 'context/ListTodos'

export default function Footer (): React.ReactElement {
  const { setPage, clearCompleted } = useListTodos()
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.all)
  const handleChange = (page: Pages): void => {
    setCurrentPage(page)
    setPage(page)
  }
  const handleClearCompleted = (): void => {
    clearCompleted()
  }
  return (
    <footer className='footer'>
      <TodoCount />
      <ul className='filters'>
        <li>
          <a
            href='#'
            onClick={() => handleChange(Pages.all)}
            className={currentPage === Pages.all ? 'selected' : ''}
          >
            All
          </a>
        </li>
        <li>
          <a
            href='#'
            onClick={() => handleChange(Pages.active)}
            className={currentPage === Pages.active ? 'selected' : ''}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href='#'
            onClick={() => handleChange(Pages.completed)}
            className={currentPage === Pages.completed ? 'selected' : ''}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className='clear-completed'
        onClick={handleClearCompleted}
      >
        Clear Completed
      </button>
    </footer>
  )
}
