'use client'
import React from 'react';
import Footer from '../components/footer';
import { Descripcion } from '../components/Descripcion'; 
import Button from '../components/Button';
import Addtocart from '../components/Addtocart';
import ColorsButton from '../components/ColorsButton';
import Image from 'next/image';
import { ClothingItem } from '../components/ClothingItem';
import Quantity from '../components/ QuantityProps'; 
const ProductPage = () => {

  
  const handleAddToCart = () => {
    console.log('Agregado al carrito');
  };

  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
    <div className="flex flex-col md:flex-row min-h-screen bg-white mx-auto">

       
      
      <div className=" md:flex flex-grow content-center" >
        <a href="#" className="mx-10 rounded-full p-1 bg-white-900">
          <Image src="/Rectangle 149.png" alt="" width={600} height={600} />
        </a>
      </div>

      <div className="w-full md:w-1/2 p-8 flex flex-col items-start"> 
        <div className="mb-4">
          <ClothingItem title="Hodie" price="$90.00" />
        </div>
        
        <div className="text-left mb-4 space-y-4"> 
          <div className="mb-2 font-bold">Size:</div>
          <div className="flex mb-4">
            <Button className="border-black mr-2">S</Button>
            <Button className="bg-white border border-black mr-2">M</Button>
            <Button className="bg-white border border-black mr-2">L</Button>
            <Button className="bg-white border border-black mr-2">XL</Button>
            <Button className="bg-white border border-black mr-2">XXL</Button>
          </div>
          <div className="mb-2 font-bold">Colors:</div>
          <div className="flex mb-4 space-x-2"> 
            <ColorsButton color="#45644E "/>
            <ColorsButton color="#494031" />
            <ColorsButton color="#415F5E" />
            <ColorsButton color="#3C3C57" />
            <ColorsButton color="#5F3F4F" />
          </div>
          
          <Quantity onIncrement={handleIncrement} onDecrement={handleDecrement} quantity={quantity} />
          
          
        </div>


          <div>
          <div>
            
            <Addtocart className="w-full bg-orange-200 full mb-5">ADD TO CART</Addtocart>
          </div>
            <Descripcion descripcion="This hoodie is the perfect choice for comfort and warmth. Meticulously crafted from 100% cotton, the hoodie features a soft, plush fleece interior and a unisex sizing design. Soft and lightweight, it's sure to be your go-to for chilly days." />
          </div>
        </div>
      
    </div>
    <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;