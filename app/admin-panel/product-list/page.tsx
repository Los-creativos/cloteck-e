import Button from '@/app/components/Button'
import ProductDisplay from '@/app/components/ProductDisplay'
import ProductsLayout from '@/app/components/ProductsLayout'
import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'

export default function ProductList () {
  return (
    <div>
      <Sidebar />
      <div className='pl-72 pt-5 pr-10'>
        <div className='flex flex-row'>
          <h1 className='font-bold text-3xl'>PRODUCT LIST</h1>
          <Link href='/'>
            <Button text='+' className='ml-5 bg-slate-500 rounded-full' />
          </Link>
        </div>
        <div className='w-full mt-10'>
          <ProductDisplay />
          <ProductsLayout />
        </div>
      </div>
    </div>
  )
}
