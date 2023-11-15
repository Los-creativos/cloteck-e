import Button from '@/app/components/Button'
import CategoryLayout from '@/app/components/CategoryLayout'
import Link from 'next/link'

export default function CategoryList () {
  return (
    <div>
      <div className='p-10'>
        <div className='flex flex-row items-center'>
          <h1 className='font-bold md:text-3xl sm:text-xl text-lg'>CATEGORY LIST</h1>
          <Link href='/admin-panel/add-category'>
            <Button text='+' className='ml-5 md:text-2xl  bg-slate-500 rounded-full' />
          </Link>
        </div>
        <div className='w-full mt-10'>
          <CategoryLayout />
        </div>
      </div>
    </div>
  )
}
