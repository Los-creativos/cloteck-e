import Button from '@/app/components/Button'
import CategoryDisplay from '@/app/components/CategoryDisplay'
import CategoryLayout from '@/app/components/CategoryLayout'
import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'

export default function CategoryList () {
  return (
    <div>
      <Sidebar />
      <div className='pl-72 pt-5 pr-10'>
        <div className='flex flex-row'>
          <h1 className='font-bold text-3xl'>CATEGORY LIST</h1>
          <Link href='/admin-panel/add-category'>
            <Button text='+' className='ml-5 bg-slate-500 rounded-full' />
          </Link>
        </div>
        <div className='w-full mt-10'>
          <CategoryDisplay />
          <CategoryLayout />
        </div>
      </div>
    </div>
  )
}
