'use client'

import AddProductCheckBoxDropDown from '@/app/components/admin/AddProductCheckboxDropDown'
import AttributeDisplay from '@/app/components/admin/AttributeDisplay'
import InputWithTItle from '@/app/components/admin/InputWithTitle'
import Button from '@/app/components/ui/Button'
import Dropdown from '@/app/components/ui/DropDown'
import LinkButton from '@/app/components/ui/LinkButton'
import { useState } from 'react'

export default function EditProduct({ params }: { params: { data: string } }) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])
  const productInfo = JSON.parse(decodeURIComponent(params.data))
  const [description, setDescription] = useState(undefined)

  const updateCategories = () => {
    const validator = new Set<number>()
    productInfo.ProductCategory.map((productCategory: any) => {
      validator.add(productCategory.category_id)
    })
    return (Array.from(validator.values()))
  }

  const onChangeDropDownCheckBox = (categories: number[]) => {
    const validator = new Set<number>()
    categories.map((category) => {
      validator.add(category)
    })
    setSelectedCategories(Array.from(validator.values()))
  }

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const response = await fetch(`/api/products/${productInfo.product_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          ProductCategory: selectedCategories.map((category_id) => ({
            category_id,
          })),
        }),
      })
      if (response.ok) {
        alert('Product edited successfully')
      } else {
        const errorData = await response.json()
        if (errorData && errorData.error && Array.isArray(errorData.error)) {
          const errorMessage = errorData.error
            .map((err: any) => `${err.path}: ${err.message}`)
            .join('\n')
          alert(`${errorMessage}`)
        } else {
          alert('Failed to edit category')
        }
      }
    } catch (error) {
      alert('There was an error updating the product')
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className='pt-10 md:px-10 lg:px-28'>
        <div className='grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-4'>
          <InputWithTItle
            readOnly
            title='Product Name'
            placeholder='Ej. T-shirt ALC'
            value={productInfo.name}
            className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px] opacity-40 hover:bg-slate-400 bg-slate-400 border pointer-events-none focus:outline-none cursor-default rounded-md read-only: overflow-hidden'
          />
          <InputWithTItle
            readOnly
            title='Price'
            placeholder='Ej. 163.00'
            value={productInfo.price.toString()}
            className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px] opacity-40 hover:bg-slate-400 bg-slate-400 border pointer-events-none focus:outline-none cursor-default rounded-md read-only: overflow-hidden'
          />
          <AddProductCheckBoxDropDown
            selectedCategories={selectedCategories}
            onChange={onChangeDropDownCheckBox}
          />
        </div>
        <InputWithTItle
          title='Description'
          placeholder='Ej. T-shirt ALC is the new mode of T-shirts and now is available in Cloteck'
          value={
            description != undefined ? description : productInfo.description
          }
          onChange={(e: any) => setDescription(e.target.value)}
          className='3xl:min-h-[57px] lg:min-h-[80px] md:min-h-[120px] sm:min-h-[120px] min-h-[230px] 3xl:max-h-[57px] lg:max-h-[80px] md:max-h-[120px] sm:max-h-[120px] max-h-[230px]'
        />

        <Dropdown
          classnameButton='w-full p-3 rounded-xl mt-5 text-center'
          text='See your actual attributes'
        >
          {productInfo.Attribute.map((attribute: any, i: number) => {
            return (
              <AttributeDisplay
                key={i}
                color={attribute.color.name}
                image={attribute.image.trim()}
                quantity={attribute.quantity}
                size={attribute.size.name}
              />
            )
          })}
        </Dropdown>
        <div className='flex justify-between pt-20'>
          <LinkButton
            text='Back'
            className='text-xl px-10 py-3 rounded-sm'
            href='/admin/product'
          />
          <Button
            text='Add'
            type='submit'
            className='bg-black text-white text-xl px-10 py-3 rounded-sm'
          />
        </div>
      </div>
    </form>
  )
}
