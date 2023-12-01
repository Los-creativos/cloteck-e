export default function InvoiceItem({
  productName, sizes, quantity, unitPrice, subTotal, color
}: {
  productName: string, sizes: string, quantity: number, unitPrice: number, subTotal: number, color: string
}) {
  return (
    <article className='grid grid-cols-6 grid-rows-1 text-center gap-3 px-2 py-8 border-b border-dashed border-opacity-30 center'>
      <p className='col-span-2 break-words'>{productName}<span>{color}</span></p>
      <p>{sizes}</p>
      <p>{quantity}</p>
      <p>{unitPrice}</p>
      <p>{subTotal}</p>
    </article>
  )
}
