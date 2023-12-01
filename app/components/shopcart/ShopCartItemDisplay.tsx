'use client'

import React, {useState} from "react";
import {Order} from "@prisma/client";
import Image from "next/image"
import ItemDetailsDisplay from "@/app/components/shopcart/ItemDetailsDisplay";
import Button from "@/app/components/ui/Button";
import a from "@/public/clothes/pngwing.com.png"
import ColorDisplay from "@/app/components/admin/ColorDisplay";

export default function ShopCartItemDisplay({
  image,
  Title,
  Description,
  Price,
  color,
  Sizes,
  Stocks
}: {
  image: string,
  Title: string,
  Description: string,
  Price: number,
  color: string,
  Sizes: string[],
  Stocks: number[]
}) {
  const combinedElements = Sizes.map((size, stock) => ({
    size,
    number: Stocks[stock]
  }));

  const deleteHandleOnClick = async (size: string, stock: number)=>  {
    try {
      combinedElements.splice(combinedElements.indexOf({size: size, number: stock}), 1)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className='grid lg:grid-cols-3 gap-2 border-b border-black mb-4'>
      <div className= 'lg:col-span-2 flex p-4'>
        <Image
          src={a}
          alt=''
          className="max-h-52 w-auto mr-4 border-2 p-2"
        />
        <div className='flex flex-col justify-center p-2 gap-4'>
          <div>{Title}</div>
          <div>{Description}</div>
          <div> Price: Bs. {Price} </div>
          <div className='flex gap-2'>Color:
            <ColorDisplay hexColor={'#4e2323'} diameter={25}/>
          </div>

        </div>
      </div>
      <div className= 'lg:col-span-1 mr-10 '>
        <div className= 'lg:hidden border-b border-black'/>
        <div className= 'xl:grid hidden border-b border-black lg:grid-cols-6 lg:grid-rows-1 p-4'>
          <div className= 'flex col-span-1 justify-center items-center '> Size </div>
          <div className= 'flex col-span-1 justify-center items-center'> Quantity </div>
          <div className= 'flex col-span-3 justify-center items-center'>Subtotal</div>
        </div>
        <div className=''>
        {combinedElements.map((order) => {
          return (
            <>
              <ItemDetailsDisplay
                key={crypto.randomUUID()}
                Size={order.size}
                Price={Price}
                Stock={order.number}
                Delete= {
                  <Button className='bg-transparent' onClick={() =>
                    deleteHandleOnClick(order.size, order.number)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path d='M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z' />
                    </svg>
                  </Button>
                }/>
              <div className= 'border-b border-black mb-2'/>
            </>
          )
        })}
        </div>
      </div>
    </div>
  )
}