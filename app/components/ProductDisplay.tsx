import { ReactNode } from 'react'
import ColorDisplay from './admin/ColorDisplay'

export default function ProductDisplay ({
  ProductName,
  Size,
  Color = '',
  Price,
  Category,
  Edit,
  Remove
}: {
  ProductName?: String;
  Size?: String;
  Color?: string | ReactNode & NonNullable<string>;
  Price?: String;
  Category?: String;
  Edit?: String | ReactNode;
  Remove?: String | ReactNode;
}) {
  return (
    <div className='grid lg:grid-cols-7 shadow-inner lg:grid-rows-1 grid-cols-2 lg:gap-4 text-center text-lg bg-zinc-200 bg-opacity-60 rounded-xl lg:mb-3 mb-5  py-4 lg:p-0 p-2'>
      <div className='lg:hidden font-semibold lg:col-span-1 col-span-2 justify-center items-center'>Product Name</div>
      <div className='flex lg:col-span-1 col-span-2 justify-center items-center'>{ProductName}</div>
      <div className='lg:hidden border-t border-stone-300 w-full col-span-2 my-4' />
      <div className='lg:hidden font-semibold justify-center items-center'>Size</div>
      <div className='lg:hidden font-semibold justify-center items-center'>Colors</div>
      <div className='flex justify-center items-center'>{Size}</div>
      <div className='grid grid-flow-col items-center justify-center gap-3'>
        {Color.split(', ').map((color, i) => {
          return (
            <div key={i} className='flex justify-center items-center'><ColorDisplay hexColor={color} diameter={15} /></div>
          )
        })}
      </div>
      <div className='lg:hidden border-t border-stone-300 w-full col-span-2 my-4' />
      <div className='lg:hidden font-semibold justify-center items-center'>Price</div>
      <div className='lg:hidden font-semibold justify-center items-center'>Category</div>
      <div className='flex justify-center items-center'>{Price}</div>
      <div className='flex justify-center items-center'>{Category}</div>
      <div className='lg:hidden border-t border-stone-300 w-full col-span-2 my-4' />
      <div className='lg:hidden font-semibold justify-center items-center'>Edit</div>
      <div className='lg:hidden font-semibold justify-center items-center'>Remove</div>
      <div className='flex justify-center items-center'>{Edit}</div>
      <div className='flex justify-center items-center'>{Remove}</div>
    </div>
  )
}
