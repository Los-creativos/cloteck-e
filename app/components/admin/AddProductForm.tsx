'use client'

import { useState } from 'react'
import InputWithTItle from './InputWithTitle'
import Button from '@/app/components/common/Button'
import LinkButton from '@/app/components/common/LinkButton'
import AddProductCheckBoxDropDown from './AddProductCheckboxDropDown'
import { Attribute } from '@prisma/client'

export default function AddProductForm () {

  const [name, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [attributes, setAttributes] = useState<Attribute[]>([])
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [image, setImage] = useState('')

  const handleCategoriesChange = (categories: number[]) => {
    setSelectedCategories(categories);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/category/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          description
        })
      })
      response.ok ? alert('Category added successfully') : alert('Category not added')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className='pt-10 md:px-10 lg:px-28'>
          <div className='grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-4'>
            <InputWithTItle
              title='Product Name'
              placeholder='Ej. T-shirt ALC'
              value={name}
              onChange={(e: any) => setProductName(e.target.value)}
              className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]'
            />
            <InputWithTItle
              title='Price'
              placeholder='Ej. 163.00'
              value={name}
              onChange={(e: any) => setPrice(e.target.value)}
              className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]'
            />
            <AddProductCheckBoxDropDown selectedCategories={selectedCategories} onChange={handleCategoriesChange} />
          </div>
          <InputWithTItle
            title='Description'
            placeholder='Ej. T-shirt ALC is the new mode of T-shirts and now is available in Cloteck'
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            className='3xl:min-h-[57px] lg:min-h-[80px] md:min-h-[120px] sm:min-h-[120px] min-h-[230px] 3xl:max-h-[57px] lg:max-h-[80px] md:max-h-[120px] sm:max-h-[120px] max-h-[230px]'
          />
          <div className='grid grid-cols-3 grid-rows-1 gap-x-4'>
            <InputWithTItle
              title='Size'
              placeholder='Ej. XL'
              value={name}
              onChange={(e: any) => setProductName(e.target.value)}
              className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]'
            />
            <InputWithTItle
              title='Colors'
              placeholder='Ej. #FFFFF'
              value={name}
              onChange={(e: any) => setProductName(e.target.value)}
              className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]'
            />
            <InputWithTItle
              title='Quantity'
              placeholder='Ej. 54'
              value={name}
              onChange={(e: any) => setProductName(e.target.value)}
              className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]'
            />
            <Button text='Add Attribute +' className='rounded-full col-span-3 mt-5 bg-slate-400 hover:bg-slate-500' type='button'/>
          </div>
          <input className='mt-10 p-3 bg-slate-300 bg-opacity-50 w-full text-sm text-gray-900 border rounded-lg hover:bg-slate-400 hover:bg-opacity-50 cursor-pointer' type='file' accept='image/png'/>
          <div className='flex justify-between pt-20'>
            <LinkButton text='Back' className='text-xl px-10 py-3 rounded-sm' href='/admin/product' />
            <Button text='Add' type='submit' className='text-xl px-10 py-3 rounded-sm' />
          </div>
        </div>
      </form>
  )
}
