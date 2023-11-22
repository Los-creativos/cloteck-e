'use client'
import ProductCard from './ProductCard';
import React, { useEffect, useState } from 'react';
import { Product } from '@/app/types';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/prodsucts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error: any) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div className='container justify-center text-3xl'>Loading products...</div>;
  }

  if (error) {
    return <div className='container justify-center text-3xl'>Error fetching products: {error}</div>;
  }

  const productsToShow = products.slice(0, 6);

  return (
    <div className='flex items-center justify-center my-4'>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-4 md:mb-4">
        {productsToShow.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
}
