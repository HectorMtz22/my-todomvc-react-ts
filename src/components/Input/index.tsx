// import { Todo } from 'models/todo'
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'

export default function Input (props: any): ReactElement {
  const [value, setValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => { setValue(e.target.value) }
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    props.onSubmit(value)
    props.iscontrolled === true && setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      {props.iscontrolled === true
        ? <input
            type='text'
            onBlur={handleSubmit}
            autoFocus
            {...props}
            value={value}
            onChange={handleChange}
          />
        : <input
            type='text'
            onBlur={handleSubmit}
            autoFocus
            {...props}
            onChange={handleChange}
          />}
    </form>
  )
}
