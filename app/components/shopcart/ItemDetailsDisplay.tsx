import {ReactNode, useEffect, useState} from "react";

export default function ItemDetailsDisplay({
  Size,
  Price,
  Stock,
  Delete
}: {
  Size: String;
  Price: number;
  Stock: number;
  Delete?: ReactNode;
}) {
  const [subTotal, setSubTotal] = useState<number>()
  const [quantity, setQuantity] = useState<string>('1')

  useEffect(() => {
    setSubTotal(Price * parseInt(quantity))
  }, [quantity, subTotal, Price]);

  const quantityHandle = (event: { target: { value: string; }; }) => {
    let quantity = event.target.value;

    quantity = quantity.trim() === '' ? '0' : quantity;
    quantity = Math.min(parseInt(quantity), Stock).toString();

    setQuantity(quantity);
  }

  return (
    <div className= 'grid xl:grid-cols-6 grid-cols-4 xl:grid-rows-1 grid-rows-2 shadow-accent xl:p-3 text-sm text-left items-center'>
      <div className='flex xl:hidden font-semibold col-span-2 justify-center'> Size </div>
      <div className= 'flex xl:col-span-2 col-span-2 w-full xl:justify-start justify-center text-center xl:m-2 xl:text-left text-sm'> {Size} </div>
      <div className='flex xl:hidden font-semibold col-span-2 justify-center'> Quantity </div>
      <div className='flex w-full xl:col-span-1 col-span-2 justify-center xl:text-left'>
        <input type='number'
               min='1'
               max= {Stock}
               defaultValue={quantity}
               value={quantity}
               onChange={quantityHandle}
               className='bg-white-100 border border-black rounded-l  text-sm p-2'/>
      </div>
      <div className='flex xl:hidden font-semibold col-span-2 justify-center'> Delete </div>
      <div className='flex xl:col-span-1 col-span-2 justify-center xl:text-left'> {Delete} </div>
      <div className='flex xl:hidden font-semibold col-span-2 justify-center'> SubTotal </div>
      <div className='flex xl:col-span-1 col-span-2 text-sm justify-center w-full overflow-auto'> {subTotal?.toFixed(2)} </div>
    </div>
  )
}