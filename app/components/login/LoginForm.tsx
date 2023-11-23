'use client'

import { useState } from "react";
import InputWithTItle from "../admin/InputWithTitle";
import Button from "../ui/Button";

export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    await fetch(`/api/user/login/${email}/${password}`)
      .then((res) => {
        if (res.ok) {
          alert('Login success')
        } else {
          alert('Invalid email or password')
        }
      }
    )
  }

  return (
    <form onSubmit={handleOnSubmit} className='grid p-10 gap-y-5 max-w-screen-lg w-full'>
      <InputWithTItle onChange={(e: any) => setEmail(e.target.value)} textarea={false} type='email' title='Email' />
      <InputWithTItle onChange={(e: any) => setPassword(e.target.value)} textarea={false} type='password' title='Password' />
      <Button text='Login' type='submit' />
    </form>
  )
}
