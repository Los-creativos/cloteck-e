'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductList from '@/app/components/home/ProductLIst';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug;
  const id = params.id;

  //TODO: poner imagen del primer porducto en la categorioa, si no tiene no se muestra
  // You can then use either `slug` or `id` to fetch your data
  // For demonstration, let's assume we use `id` to fetch category data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/category/${id}`);
        const data = await response.json();
        setProducts(data.ProductCategory.map(pc => pc.product));
      } catch (error) {
        console.error('Error fetching category:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{`Products for Category ${slug}`}</h1>
      <ProductList products={products} />
    </div>
  );
}
