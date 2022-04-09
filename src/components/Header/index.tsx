import { ReactElement } from 'react'

export default function Header (): ReactElement {
  return (
    <header className='header'>
      <h1>Todos</h1>
      <input
        type='text'
        className='new-todo'
        placeholder='What needs to be done?'
      />
    </header>
  )
}
