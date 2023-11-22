import Image from "next/image"
import ColorDisplay from "./ColorDisplay"

export default function AttributeDisplay ({
  size,
  color,
  quantity,
  image 
}: {
  size: string,
  color: string,
  quantity: number,
  image: string
}) {
  return (
    <div className='grid md:grid-cols-4 grid-rows-2 grid-cols-2 items-center border rounded-lg justify-center justify-items-center'>
        <h1 className='font-semibold text-center'>Size</h1>
        <h1 className='font-semibold text-center'>Color</h1>
        <h1 className='font-semibold text-center'>Quantity</h1>
        <h1 className='font-semibold text-center'>Image</h1>
        <p>{size}</p>
        <ColorDisplay hexColor={color} diameter={30}/>
        <p>{quantity}</p>
        <Image src={image} alt='Product' width={80} height={80} />
    </div>
  )
}