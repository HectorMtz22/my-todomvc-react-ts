
function App () {
  return (
    <div className='todoapp'>
      <header className='header'>
        <h1>Todos</h1>
        <input
          type='text'
          className='new-todo'
          placeholder='What needs to be done?'
        />
      </header>

      <section className='main'>
        <input id='toggle-all' type='checkbox' className='toggle-all' />
        <label htmlFor='toggle-all' />

        <ul className='todo-list'>
          <li className='todo-item'>
            <div className='view'>
              <input type='checkbox' className='toggle' />
              <label onDoubleClick={() => window.alert('Mock')}>HI</label>
              <button className='destroy' onClick={() => window.alert('otro click')} />
            </div>
            <input type='text' className='edit' />
          </li>
        </ul>
      </section>
      <footer className='footer'>
        <span className='todo-count'>
          {/* ! TODO  */}
          <strong>10 left</strong>
        </span>
        <ul className='filters'>
          <li><a href='#'>All</a></li>
          <li><a href='#'>Active</a></li>
          <li><a href='#'>Completed</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default App
