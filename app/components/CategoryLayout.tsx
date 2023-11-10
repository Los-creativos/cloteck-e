'use client'

import { useEffect, useState } from "react"
import Button from "./Button";
import editIcon from '../assets/edit-icon.png'
import canIcon from '../assets/trash-icon.png'
import Image from "next/image";
import CategoryDisplay from "./CategoryDisplay";

export default function CategoryLayout() {

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = () => {
      fetch('/api/category')
        .then(response => response.json())
        .then(data => setCategories(data))
        
      }
      fetchCategories();
  }, [])

  return (
    <>
    {categories.map((category, i) => {
      return (
        <CategoryDisplay
          key={i}
          CategoryName={category.name}
          Description={category.description}
          Edit={<Button className='bg-transparent w-100'><Image src={editIcon} alt="asd"/></Button>}
          Remove={<Button className='bg-transparent w-100'><Image src={canIcon} alt="asd"/></Button>}

        />
      )
    })}
    </>
  )
}