import Link from 'next/link'

export default function AdminHeader () {
  return (
    <div>
      <nav className='flex justify-between items-center h-20 p-4'>
        <div className='flex place-items-baseline font-semibold md:gap-10 gap-2'>
          <h1 className='text-black md:text-3xl sm:text-xl m-4'>CLOTECK</h1>
          <Link href='/admin-panel/product-list' prefetch={true}>
            <h1 className='md:text-base sm:text-sm text-xs'>PRODUCTS</h1>
          </Link>
          <Link href='/admin-panel/category-list' prefetch={true}>
            <h1 className='md:text-base sm:text-sm text-xs'>CATEGORIES</h1>
          </Link>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          className='w-7 h-7 md:mr-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
          />
        </svg>
      </nav>
      <div className='w-screen border-t' />
    </div>
  )
}
