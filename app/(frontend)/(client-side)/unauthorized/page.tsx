import Link from "next/link";

export default function Unauthorized () {
  return (
    <section className='text-center items-center'>
      <h1 className='text-3xl'>You are <strong>Unauthorized</strong> to enter to this page</h1>
      <Link href={'/'}>
        <span className='text-blue-500 text-2xl'>Go to Home</span>
      </Link>
    </section>
  )
}