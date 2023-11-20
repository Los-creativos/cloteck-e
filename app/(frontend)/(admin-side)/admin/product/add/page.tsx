import AddProductForm from '@/app/components/admin/AddProductForm'

export default function AddProduct () {
  return (
    <div className='p-10'>
      <h1 className='font-semibold lg:text-3xl md:text-2xl text-xl sm:text-left text-center'>ADD PRODUCT</h1>
      <AddProductForm />
    </div>
  )
}
