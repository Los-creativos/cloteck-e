import { useEffect, useState } from "react";
import Dropdown from "@/app/components/ui/DropDown"
import { Category } from "@prisma/client";

export default function AddProductCheckBoxDropDown({ selectedCategories = [], onChange }: { selectedCategories: number[], onChange: (categories: number[]) => void;}) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    fetch('/api/category')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error))
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleCategoryToggle = (categoryId: number) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id: number) => id !== categoryId)
      : [...selectedCategories, categoryId];
    onChange(updatedCategories);
  };

  return (
    <div className='w-full'>
      <h1 className='font-semibold lg:text-xl md:text-lg w-full mb-5 mt-5'>Categories</h1>
      <Dropdown text='Select categories' classnameButton='p-3 sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]'>
        {categories.map((category: Category) => (
          <div key={category.category_id}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.category_id)}
              onChange={() => handleCategoryToggle(category.category_id)}
              />
            <label className="ms-2 text-sm">{category.name}</label>
          </div>
        ))}
      </Dropdown>
    </div>
  )
}
