import LinkButton from '@/app/components/ui/LinkButton'
import CategoryLayout from '@/app/components/admin/CategoryLayout'

export default function CategoryList () {
  return (
    <div>
      <div className='p-10'>
        <div className='flex flex-row items-center'>
          <h1 className='font-semibold md:text-3xl sm:text-xl text-lg'>CATEGORY LIST</h1>
            <LinkButton text='+' className='ml-5 md:text-2xl  bg-slate-500 rounded-full' href='/admin/category/add' />
        </div>
        <div className='w-full mt-10'>
          <CategoryLayout />
        </div>
      </div>
    </div>
  )
}
