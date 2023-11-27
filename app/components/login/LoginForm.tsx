'use client'

import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import InputWithTItle from "@/app/components/admin/InputWithTitle";
import Button from "@/app/components/ui/Button";
import { login } from "@/app/utils/LoginUtils";
import { emailCustomerValidation } from "@/app/(backend)/api/user/user.schema";
import { ZodError } from "zod";
import { useRouter } from "next/navigation";

export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const notifyError = () => toast.error('Email or password is invalid.', {position: "top-center", duration: 1000});
  const redirectHome = async () => {
    router.push('/')
  }

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    try {
      emailCustomerValidation.parse({email})
      const isLogged = await login(email, password)
      isLogged ? redirectHome() : notifyError()
    } catch (error) {
      if (error instanceof ZodError) {
        toast.error('Insert a valid email.')
      }
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className='grid p-10 gap-y-5 max-w-screen-lg w-full'>
      <InputWithTItle onChange={(e: any) => setEmail(e.target.value)} textarea={false} type='email' title='Email' />
      <InputWithTItle onChange={(e: any) => setPassword(e.target.value)} textarea={false} type='password' title='Password' />
      <Button text='Login' type='submit' className={'active:scale-95 active:bg-slate-800 hover:bg-slate-800'}/>
      <Toaster />
    </form>
  )
}
