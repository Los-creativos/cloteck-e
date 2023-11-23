import ProductsLayout from '@/app/components/admin/ProductsLayout'
import LinkButton from '@/app/components/ui/LinkButton'

export default function ProductList () {
  return (
    <div className='p-10'>
      <div className='flex flex-row items-center'>
        <h1 className='font-semibold md:text-3xl sm:text-xl text-lg'>PRODUCT LIST</h1>
        <LinkButton text='+' className='ml-5 md:text-2xl  bg-slate-500 rounded-full' href='/admin/product/add' />
      </div>
      <div className='w-full mt-10'>
        <ProductsLayout />
      </div>
    </div>
  )
}
