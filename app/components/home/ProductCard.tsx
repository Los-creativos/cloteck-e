import { Product } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

  interface ProductCardProps {
    product: Product;
  }

  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <Link href={`/product/${encodeURIComponent(JSON.stringify(product))}`} passHref>
      <div id="alink" className="flex flex-col items-center p-4 rounded-lg transform transition duration-500 hover:scale-105">
        <div className='relative h-72 w-full mb-4'>
          <Image src={product.Attribute[0].image} alt={product.name} width={300} height={300} 
                 className="rounded-lg" loading="lazy" />
        </div>
        <div className='w-full text-left'>
          <h3 className="font-bold line-clamp-2 sm:text-2xl md:text-xl w-full mb-2">{product.name}</h3>
          <p className="text-gray-600 text-base sm:text-lg">{product.price} BOB</p>
        </div>      
      </div>
      </Link>
    );
  };

  export default ProductCard;
