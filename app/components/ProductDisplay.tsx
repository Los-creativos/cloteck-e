import { ReactNode } from 'react'

export default function ProductDisplay ({
  ProductName,
  Size,
  Color,
  Price,
  Category,
  Edit,
  Remove
}: {
  ProductName?: String;
  Size?: String;
  Color?: String | ReactNode;
  Price?: String;
  Category?: String;
  Edit?: String | ReactNode;
  Remove?: String | ReactNode;
}) {
  return (
    <div className='grid lg:grid-cols-7 shadow-inner lg:grid-rows-1 grid-cols-2 lg:gap-4 lg:text-center text-lg bg-zinc-200 bg-opacity-60 rounded-xl lg:mb-3 mb-5  py-4 lg:p-0 p-2'>
      <div className='lg:hidden font-semibold lg:col-span-1 col-span-2 text-center justify-center items-center'>Product Name</div>
      <div className='flex lg:col-span-1 col-span-2 text-center justify-center items-center'>{ProductName}</div>
      <div className='lg:hidden border-t border-stone-300 w-full col-span-2 my-4' />
      <div className='lg:hidden font-semibold justify-center items-center text-center'>Size</div>
      <div className='lg:hidden font-semibold justify-center items-center text-center'>Colors</div>
      <div className='flex justify-center items-center'>{Size}</div>
      <div className='flex justify-center items-center'>{Color}</div>
      <div className='lg:hidden border-t border-stone-300 w-full col-span-2 my-4' />
      <div className='lg:hidden font-semibold justify-center items-center text-center'>Price</div>
      <div className='lg:hidden font-semibold justify-center items-center text-center'>Category</div>
      <div className='flex justify-center items-center'>{Price}</div>
      <div className='flex justify-center items-center'>{Category}</div>
      <div className='lg:hidden border-t border-stone-300 w-full col-span-2 my-4' />
      <div className='lg:hidden font-semibold justify-center items-center text-center'>Edit</div>
      <div className='lg:hidden font-semibold justify-center items-center text-center'>Remove</div>
      <div className='flex justify-center items-center'>{Edit}</div>
      <div className='flex justify-center items-center'>{Remove}</div>
    </div>
  )
}
