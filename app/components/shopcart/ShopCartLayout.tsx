'use client'

import { useEffect, useState } from 'react'
import ShopCartItemDisplay from "@/app/components/shopcart/ShopCartItemDisplay";
import Button from "@/app/components/ui/Button";
import LinkButton from "@/app/components/ui/LinkButton";

interface Product {
  Image: string;
  Title: string;
  Description: string;
  Price: number;
  Color: string;
  Sizes: string[];
  Stocks: number[];
}

const initialProductList: Product[] = [
  {
    Image: 'image_url_1',
    Title: 'Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1',
    Description: 'Description for Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1',
    Price: 19.99,
    Color: 'Blue',
    Sizes: ['Small', 'Medium', 'Large'],
    Stocks: [10, 15, 20]
  },
  {
    Image: 'image_url_2',
    Title: 'Product 2',
    Description: 'Description for Product 2',
    Price: 29.99,
    Color: 'Red',
    Sizes: ['Medium', 'Large', 'X-Large'],
    Stocks: [12, 18, 25]
  },
  {
    Image: 'image_url_2',
    Title: 'Product 2',
    Description: 'Description for Product 2',
    Price: 29.99,
    Color: 'Red',
    Sizes: ['Medium', 'Large', 'X-Large'],
    Stocks: [12, 18, 25]
  },
  {
    Image: 'image_url_2',
    Title: 'Product 2',
    Description: 'Description for Product 2',
    Price: 29.99,
    Color: 'Red',
    Sizes: ['Medium', 'Large', 'X-Large'],
    Stocks: [12, 18, 25]
  },
];

export default function ShopCartLayout () {
  const [orders, setOrders] = useState<Product[]>(initialProductList)

  return (
    <div className= 'w-full md:px-14'>
      <div>
        <h1 className= 'text-3xl md:mx-0 px-4 font-semibold'> YOUR CART </h1>
        <div className= 'w-full text-end p-2'>
          <Button text={"Clear Cart"}
                  className= 'underline text-black place-self-end'/>
        </div>
      </div>
      <div className='border-t border-black'/>
      <div className= 'overflow-y-scroll lg:h-[50vh] h-[45vh]'>
        {orders.map((order) => {
          return (
            <ShopCartItemDisplay
              key={crypto.randomUUID()}
              image={order.Image}
              Title={order.Title}
              Description={order.Description}
              Price={order.Price}
              color={order.Color}
              Sizes={order.Sizes}
              Stocks={order.Stocks}/>
          )
        })}
      </div>
      <div className= 'w-full grid md:grid-cols-4 font-semibold text-xl p-5'>
        <section className='md:col-start-4 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1 className='justify-between'>ORDER TOTAL</h1>
            <p> Bs. 332</p>
          </div>
          <Button text={"CHECK OUT"} className=' w-full bg-amber-500 '/>
          <div className='w-full text-center'>
            <LinkButton className='text-black text-sm underline'> Continue Shopping </LinkButton>
          </div>
        </section>
      </div>
    </div>
  )
}
