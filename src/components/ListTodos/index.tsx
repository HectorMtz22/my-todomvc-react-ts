export default function ListTodos () {
  return (
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
  )
}
