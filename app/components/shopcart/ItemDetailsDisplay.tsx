'use client'

import {ReactNode, useEffect, useState} from "react";

export default function itemDetailsDisplay({
  Size,
  Price,
  Stock,
  Delete
}: {
  Size: String;
  Price: number;
  Stock: number
  Delete: ReactNode
}) {
  const [subTotal, setSubTotal] = useState<number>()
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => {
    setSubTotal(Price * quantity)
  }, []);

  const quantityHandle = (event: { target: { value: string; }; }) => {
    const quantity = event.target.value;
    setQuantity(parseInt(quantity))
  }

  return (
    <div className= 'grid lg:grid-cols-6  grid-cols-2 lg:grid-rows-1 grid-rows-2 shadow-accent lg:p-2 text-2xl text-center items-center'>
      <div className='flex lg:hidden font-semibold col-span-2 justify-center'> Size </div>
      <div className= 'flex lg:col-span-1 col-span-2 justify-center w-full overflow-auto'> {Size} </div>
      <div className='flex lg:hidden font-semibold col-span-2 justify-center'> Price </div>
      <div className= 'flex lg:col-span-1 col-span-2 justify-center w-full overflow-auto'> {Price} </div>
      <div className='flex lg:hidden font-semibold col-span-2 justify-center'> Quantity </div>
      <input type='number'
             min='1'
             max= {Stock}
             value={quantity}
             onChange={quantityHandle}
             className='bg-white-200 border border-black rounded-none'/>
      <div className='flex lg:hidden font-semibold col-span-2 justify-center'> Delete </div>
      <div className='flex lg:col-span-1 justify-center'> {Delete} </div>
      <div className='flex lg:hidden font-semibold col-span-2 justify-center'> SubTotal </div>
      <div className='flex lg:col-span-1 col-span-2 justify-center w-full overflow-auto'> {subTotal} </div>
    </div>
  )
}