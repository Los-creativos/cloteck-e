'use client'

import { useState } from 'react'
import Button from '@/app/components/ui/Button'
import InputWithTItle from '@/app/components/InputWithTitle'
import Link from 'next/link'

export default function EditCategory ({params}:{params: {data: string}}) {
  
  const [description, setDescription] = useState('');
  const categoryInfo = JSON.parse(decodeURIComponent(params.data))

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/category/${categoryInfo.category_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description
        })
      });
      response.ok ? alert('Category edited successfully') : alert('Category was not edited');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='p-10'>
      <h1 className='font-bold lg:text-3xl md:text-2xl text-xl sm:text-left text-center'>EDIT CATEGORY</h1>
      <form onSubmit={handleSubmit}>
        <div className='pt-10 md:px-10 lg:px-28'>
          <InputWithTItle
              title='Category Name'
              value={categoryInfo.name}
              className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px] opacity-40 hover:bg-slate-400 bg-slate-400 border pointer-events-none focus:outline-none cursor-default rounded-md read-only:'
            />
            <InputWithTItle
              title='Description'
              value={description != ''? description: categoryInfo.description}
              onChange={(e: any) => setDescription(e.target.value)}
              className='3xl:min-h-[57px] lg:min-h-[80px] md:min-h-[120px] sm:min-h-[120px] min-h-[230px] 3xl:max-h-[57px] lg:max-h-[80px] md:max-h-[120px] sm:max-h-[120px] max-h-[230px]'
            />
          <div className='flex justify-between pt-20'>
            <Link href='/admin-panel/category-list'>
              <Button text='Back' className='text-xl px-10 py-3 rounded-sm' />
            </Link>
            <Button text='Edit' type='submit' className='text-xl px-10 py-3 rounded-sm' />
          </div>
        </div>
      </form>
    </div>
  );
}
