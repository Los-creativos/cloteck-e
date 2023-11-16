'use client'
import ProductCard from './ProductCard';
import React, { useEffect, useState } from 'react';
import { Product } from '@/app/types';


export default function ProductList()  {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); 
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const productsToShow = Array.isArray(products) ? products.slice(0, 9) : [];

    return (
      <div className='flex items-center justify-center my-10 mb-10'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
        </div>
      </div>
  );
};
