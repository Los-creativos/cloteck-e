'use client'
import { useParams, useSearchParams } from 'next/navigation';
import ProductList from '@/app/components/home/ProductLIst';
import { useEffect, useState } from 'react';

export default function CategoryPage() {
  const { slug } = useParams(); 
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('id');


  useEffect(() => {
    if (categoryId) {
      fetch(`/api/category/${categoryId}`)
        .then((res) => res.json())
        .then((data) => {
          setCategory(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [slug]);

  if (loading) {
    return <div className='container justify-center'>Loading...</div>;
  }

  if (!category) {
    return <div  className='container justify-center'>Category not found or error in loading</div>;
  }


  return (
  <div className="flex flex-col p-6 my-0">
    <h1 className="text-4xl font-bold text-center my-4">{category.name}</h1>
    <p className="text-lg text-gray-600 text-center mb-10">{category.description}</p>
  
    {Array.isArray(category.ProductCategory) && category.ProductCategory.length > 0 ? (
      <ProductList products={category.ProductCategory.map(pc => pc.product)} />
    ) : (
      <p className="text-center text-xl text-gray-500">No products available for this category.</p>
    )}
</div>

  );
}
