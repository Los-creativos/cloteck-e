'use client'

import { useEffect, useState } from "react"
import ProductDisplay from "./ProductDisplay";
import Button from "./Button";
import editIcon from '../assets/edit-icon.png'
import canIcon from '../assets/trash-icon.png'
import Image from "next/image";

export default function ProductsLayout() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = () => {
      fetch('/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        
      }
      fetchProducts();
  }, [])

  return (
    <>
    {products.map((product, i) => {
      return (
        <ProductDisplay 
          key={i} 
          ProductName={product.name}
          Price={product.price}
          Category={product.ProductCategory[0].category.name}
          Color={product.ProductColor[0].color.name}
          Size={product.ProductSize[0].size.name}
          Edit={<Button className='bg-transparent w-100'><Image src={editIcon} alt="asd"/></Button>}
          Remove={<Button className='bg-transparent w-100'><Image src={canIcon} alt="asd"/></Button>}

        />
      )
    })}
    </>
  )
}