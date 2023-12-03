import Invoice from "@/app/components/invoice/Invoice";

export default function InvoicePage ({params}: {params: {id: string}}) {
  const id = parseInt(params.id);

  return(
    <div className='border p-20'>
      <Invoice id={id}/>
    </div>
  )
}