import InputWithTItle from "../admin/InputWithTitle";
import Button from "../ui/Button";

export default function LoginForm () {
  return (
    <form className='grid p-10 gap-y-5 max-w-screen-lg w-full'>
      <InputWithTItle textarea={false} type='email' title='Email' />
      <InputWithTItle textarea={false} type='password' title='Password' />
      <Button text='Login' />
    </form>
  )
}
