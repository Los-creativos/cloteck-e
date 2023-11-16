import { ReactNode } from 'react'

export default function CategoryDisplay ({
  CategoryName,
  Description,
  Edit,
  Remove
}: {
  CategoryName?: String;
  Description?: String;
  Edit?: String | ReactNode;
  Remove?: String | ReactNode;
}) {
  return (
    <div className='grid lg:grid-cols-7 shadow-inner lg:grid-rows-1 grid-cols-2 lg:gap-4 text-center items-center text-lg bg-zinc-200 bg-opacity-60 rounded-xl lg:mb-3 mb-5  py-4 lg:p-0 p-2'>
      <div className='lg:hidden flex font-semibold lg:col-span-1 col-span-2 justify-center'>Category Name</div>
      <div className='flex lg:col-span-1 col-span-2 justify-center w-full overflow-x-auto'>{CategoryName}</div>
      <div className='lg:hidden border-t border-stone-300 w-full col-span-2 my-4' />
      <div className='lg:hidden flex font-semibold lg:col-span-4 col-span-2 justify-center'>Description</div>
      <div className='flex lg:col-span-4 col-span-2 justify-center w-full overflow-x-auto'>{Description}</div>
      <div className='lg:hidden border-t border-stone-300 w-full col-span-2 my-4' />
      <div className='lg:hidden flex font-semibold col-span-1 justify-center'>Edit</div>
      <div className='lg:hidden flex font-semibold col-span-1 justify-center'>Remove</div>
      <div className='flex col-span-1 justify-center'>{Edit}</div>
      <div className='flex col-span-1 justify-center'>{Remove}</div>
    </div>
  )
}
