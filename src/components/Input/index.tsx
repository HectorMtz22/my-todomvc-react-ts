import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'

export default function Input (props: any): ReactElement {
  const [value, setValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => { setValue(e.target.value) }
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={handleChange}
        {...props}
      />
    </form>
  )
}
