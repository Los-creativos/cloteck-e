import { ReactNode } from 'react'

export default function CategoryDisplay ({
  CategoryName = 'CATEGORY NAME',
  Description = 'Description',
  Edit = 'EDIT',
  Remove = 'REMOVE'
}: {
  CategoryName?: String;
  Description?: String;
  Edit?: String | ReactNode;
  Remove?: String | ReactNode;
}) {
  return (
    <div className='grid grid-cols-7 gap-4 mx-auto text-center font-semibold text-lg'>
      <div className='flex col-span-1 justify-center items-center'>{CategoryName}</div>
      <div className='flex col-span-4 justify-center items-center'>{Description}</div>
      <div className='flex col-span-1 justify-center items-center'>{Edit}</div>
      <div className='flex col-span-1 justify-center items-center'>{Remove}</div>
    </div>
  )
}
