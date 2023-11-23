'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Button from "@/app/components/ui/Button";
import ColorDisplay from "@/app/components/admin/ColorDisplay";

const ProductDetailPage = ({ params }: { params: { data: string } }) => {

  const [idSelected, setId] = useState<number>(0)
  const [sizeSelected, setSizeId] = useState<number>()
  const productInfo = JSON.parse(decodeURIComponent(params.data))

  return (
    <form className='grid grid-cols-2 p-8'>
      <section className='flex justify-center p-4 h-full w-full'>
        <Image alt={productInfo.name} src={productInfo.Attribute[idSelected? idSelected: 0].image} width={450} height={450} className='max-h-full w-auto' />
      </section>
      <section className='font-normal p-4'>
        <header className='font-semibold text-xl'>{productInfo.name}</header>
        <p>{productInfo.price} BOB</p>
        <section className='my-3'>
          <p className='mb-3'>SIZE</p>
          <div className='grid grid-cols-6 grid-rows-1 gap-5'>
            {productInfo.Attribute.map((attribute: any, i: number) => {
              return (
                <>
                {attribute.size.size_id === sizeSelected
                  ? <Button type='button' key={i} className='bg-orange-200 border border-black rounded-none' onClick={() => setSizeId(attribute.size.size_id)}>{attribute.size.name}</Button>
                  : <Button type='button' key={i} className='hover:bg-orange-200 border border-black rounded-none' onClick={() => setSizeId(attribute.size.size_id)}>{attribute.size.name}</Button>
                }
                </>
                )
            })}
          </div>
        </section>
        <section>
          <p className='mb-3'>COLOR</p>
          <div className='grid grid-cols-12 grid-rows-1 gap-2'>
            {productInfo.Attribute.map((attribute: any, i: number) => {
              return (
                <Button type='button' key={i} className='bg-transparent' onClick={() => setId(i)}>
                  <ColorDisplay hexColor={attribute.color.name} diameter={30}/>
                </Button>
              )
            })}
          </div>
        </section>
        <section className='my-3'>
          <p>QUANTITY</p>
          <input type='number' min='1' max='10' defaultValue='1'/>
        </section>
        <Button className='w-full mb-5 bg-orange-200 hover:bg-orange-300 hover:bg-opacity-80 rounded-none'>ADD TO CART</Button>
        <p>{productInfo.description}</p>
      </section>
    </form>
  )
};

export default ProductDetailPage;
