'use client'

import { useState } from "react";
import InputWithTItle from "@/app/components/admin/InputWithTitle";
import Button from "@/app/components/ui/Button";
import { login } from "@/app/utils/LoginUtils";

export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    const isLogged = await login(email, password)
    isLogged ? alert("You are logged") : alert("Invalid Email or Password")
  }

  return (
    <form onSubmit={handleOnSubmit} className='grid p-10 gap-y-5 max-w-screen-lg w-full'>
      <InputWithTItle onChange={(e: any) => setEmail(e.target.value)} textarea={false} type='email' title='Email' />
      <InputWithTItle onChange={(e: any) => setPassword(e.target.value)} textarea={false} type='password' title='Password' />
      <Button text='Login' type='submit' />
    </form>
  )
}
