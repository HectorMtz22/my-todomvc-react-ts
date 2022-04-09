// import { Todo } from 'models/todo'
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'

export default function Input (props: any): ReactElement {
  const [value, setValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => { setValue(e.target.value) }
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(value)
    const data: any = {
      id: props.id,
      title: value,
      isCompleted: props.isCompleted
    }
    props.onSubmit(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={handleChange}
        onBlur={handleSubmit}
        {...props}
      />
    </form>
  )
}
