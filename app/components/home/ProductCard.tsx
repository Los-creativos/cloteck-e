import { Product } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

  interface ProductCardProps {
    product: Product;
  }

  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <Link href={`/products/${product.product_id}`} passHref>
      <div className="flex flex-col items-center p-4 rounded-lg transform transition duration-500 hover:scale-105">
        <div className='relative h-60 w-full mb-4'>
          <Image src={product.image} alt={product.name} width={200} height={200} 
                 className="rounded-lg" loading="lazy" />
        </div>
        <div className='w-full text-left'>
          <h3 className="text-sm sm:text-lg font-bold line-clamp-2 w-full mb-2 hover:underline">{product.name}</h3>
          <p className="text-gray-600 text-base sm:text-lg">{product.price} BOB</p>
        </div>      
      </div>
      </Link>
    );
  };

  export default ProductCard;
