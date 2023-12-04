'use client'
import { useParams } from 'next/navigation'; 
import React, { useEffect, useState } from 'react';
import { Product } from '@/app/types';
import Footer from '@/app/components/ui/footer';
import Nadvar from '@/app/components/ui/Navbar';

const ProductDetailPage = () => {
  const { id: productId } = useParams(); 
  
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      fetch(`/api/products/${productId}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Nadvar/>
      <div className='bg-black'>
      <h1 className='text-white h-96'>{product.name}</h1>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetailPage;
