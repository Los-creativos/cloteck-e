'use client'

import { useEffect, useState } from 'react'
import Button from '@/app/components/ui/Button'
import CategoryDisplay from './CategoryDisplay'
import Link from 'next/link'

export default function CategoryLayout () {
  const [categories, setCategories] = useState<any[]>([])

  const handleOnClickk = async (id: number) => {
    try {
      const response = await fetch(`/api/category/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        fetchCategories()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const fetchCategories = () => {
    fetch('/api/category')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error))
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div>
      <div className='hidden lg:grid grid-cols-7 gap-4 text-center font-semibold text-lg mb-2 py-4'>
        <div className='flex col-span-1 justify-center items-center'>Category Name</div>
        <div className='flex col-span-4 justify-center items-center'>Description</div>
        <div className='flex col-span-1 justify-center items-center'>Edit</div>
        <div className='flex col-span-1 justify-center items-center'>Remove</div>
      </div>
      <>
        {categories.map((category) => {
          return (
            <CategoryDisplay
              key={category.category_id}
              CategoryName={category.name}
              Description={category.description}
              Edit={
                <Link href={`/admin-panel/category-list/edit/${encodeURIComponent(JSON.stringify(category))}`}>
                  <Button className='bg-transparent'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      >
                      <path d='M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z' />
                    </svg>
                  </Button>
                </Link>
              }
              Remove={
                <Button className='bg-transparent' onClick={() => handleOnClickk(category.category_id)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path d='M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z' />
                  </svg>
                </Button>
              }
            />
          )
        })}
      </>
    </div>
  )
}