'use client'

import { useEffect, useState } from 'react'
import ShopCartItemDisplay from "@/app/components/shopcart/ShopCartItemDisplay";
import Button from "@/app/components/ui/Button";
import LinkButton from "@/app/components/ui/LinkButton";
import {clearOrders, getOrdersByItems, getOrdersByUser} from "@/app/(backend)/api/order/order.service";
import { OrderProduct } from '@/app/(backend)/api/order/order-dto'
import {getTokenCookie} from "@/app/utils/CookieManagement";
import {VerifyJwt} from "@/app/utils/JwtUtils";
import {Customer} from "@prisma/client";
export default function ShopCartLayout () {
  const [orders, setOrders] = useState<OrderProduct[]>()
  const [orderId, setOrderId] = useState<number>()
  const [userId, setUserId] = useState<number>()
  const productOrders = async () => {
    try {
      const token = await getTokenCookie()
      const data = await VerifyJwt(token?.value as string) as Customer
      console.log(data)
      setUserId(data.customer_id)
      getOrdersByItems(1)
      .then((response)=> response)
      .then((data) => {
        if(!data) {
          throw new Error();
        }
        // @ts-ignore
        setOrders(data)
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    productOrders()
  }, []);
  const clearCartHandle = async () => {

    try {
      const response = await clearOrders()
      if (response) {
        alert("Successful Clear the cart")
      } else {
        alert("A error ocurred, please try again")
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className= 'w-full md:px-14'>
      <div>
        <h1 className= 'text-3xl md:mx-0 px-4 font-semibold'> YOUR CART </h1>
        <div className= 'w-full text-end p-2'>
          <Button text={"Clear Cart"}
                  onClick={clearCartHandle}
                  className= 'underline text-black place-self-end'/>
        </div>
      </div>
      <div className='border-t border-black'/>
      <div className= 'overflow-y-scroll lg:h-[50vh] h-[45vh]'>
        {orders?.map((order) => {
          return (
            <ShopCartItemDisplay
              key={crypto.randomUUID()}
              image={order.image}
              Title={order.title}
              Description={order.description}
              Price={order.price}
              color={order.color}
              Sizes={order.sizes}
              Stocks={order.quantity}/>
          )
        })}
      </div>
      <div className= 'w-full grid md:grid-cols-4 font-semibold text-xl p-5'>
        <section className='md:col-start-4 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1 className='justify-between'>ORDER TOTAL</h1>
            <p> Bs. 332</p>
          </div>
          <LinkButton href={`/invoice/1`} text={"CHECK OUT"} className=' w-full bg-amber-500 '/>
          <div className='w-full text-center'>
            <LinkButton
              href={"/"}
              className='text-black text-sm underline'> Continue Shopping </LinkButton>
          </div>
        </section>
      </div>
    </div>
  )
}
