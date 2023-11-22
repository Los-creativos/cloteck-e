import Button from '@/app/components/ui/Button'
import ProductsLayout from '@/app/components/ProductsLayout'
import Link from 'next/link'

export default function ProductList () {
  return (
    <div>
      <div className='p-10'>
        <div className='flex flex-row items-center'>
          <h1 className='font-bold md:text-3xl sm:text-xl text-lg'>PRODUCT LIST</h1>
          <Link href='/'>
            <Button text='+' className='ml-5 md:text-2xl  bg-slate-500 rounded-full' />
          </Link>
        </div>
        <div className='w-full mt-10'>
          <ProductsLayout />
        </div>
      </div>
    </div>
  )
}
