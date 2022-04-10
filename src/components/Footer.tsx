import { useState } from 'react'
import TodoCount from './TodoCount'

enum Pages {
  all = 'all',
  active = 'active',
  completed = 'completed'
}

export default function Footer (): React.ReactElement {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.all)
  return (
    <footer className='footer'>
      <TodoCount />
      <ul className='filters'>
        <li>
          <a
            href='#'
            onClick={() => setCurrentPage(Pages.all)}
            className={currentPage === Pages.all ? 'selected' : ''}
          >
            All
          </a>
        </li>
        <li>
          <a
            href='#'
            onClick={() => setCurrentPage(Pages.active)}
            className={currentPage === Pages.active ? 'selected' : ''}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href='#'
            onClick={() => setCurrentPage(Pages.completed)}
            className={currentPage === Pages.completed ? 'selected' : ''}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  )
}
