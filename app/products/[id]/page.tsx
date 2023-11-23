// 'use client'
// import { useParams } from 'next/navigation'; 
// import React, { useEffect, useState } from 'react';
// import { Product } from '@/app/types';
// import Footer from '@/app/components/ui/footer';
// import Nadvar from '@/app/components/ui/Navbar';
// import Button from '@/app/components/ui/Button';
// import ColorDisplay from '@/app/components/admin/ColorDisplay';
// import Image from 'next/image';

// const ProductDetailPage = () => {
//   const { id: productId } = useParams(); 

//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     if (productId) {
//       fetch(`/api/products/${productId}`)
//         .then(response => response.json())
//         .then(data => setProduct(data));
//     }
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div>
//       <Nadvar/>
//       <div className='bg-whithe'>
//       <div className='relative h-72 w-full mb-4'>
//           <Image
//             src={product.Attribute[0].image} 
//             alt={product.name}
//             width={300}
//             height={300}
//             className="rounded-lg"
//             loading="lazy"
//           />
//         </div>
//       <h1 className='text-black'>{product.name}</h1>
//         <p className="text-gray-600 text-base sm:text-lg">{product.price} BS</p>
//         <p className="text-gray-600 text-base sm:text-lg">SIZE</p>
//           {/*<>*/}
//           {/*{product.Attribute.map((attribute) => {*/}
//           {/*    return (*/}
//           {/*        */}
//           {/*    )*/}
//           {/*}) }*/}
//           {/*</>*/}
//           <Button> XL </Button>
//         <p className="text-gray-600 text-base sm:text-lg">COLOR</p>
//           <ColorDisplay hexColor={product.name} diameter={10}/>
//         <p className="text-gray-600 text-base sm:text-lg">QUANTITY</p>
  
//         <button 
//           className="bg-orange-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
        
//       </div>
//       <div>
//       <Footer></Footer>
//       </div>
//     </div>
//   );
// };


// export default ProductDetailPage;
