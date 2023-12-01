'use client'

import { useRef } from "react";
import { jsPDF } from "jspdf";
import InvoiceItem from "./InvoiceItem";


export default function Invoice () {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePdf = () => {
    if (componentRef.current) {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const element = componentRef.current;
      const pdfWidth = 210;

      const scaleFactor = pdfWidth / element.clientWidth;

      pdf.html(element, {
        x: 0,
        y: 0,
        html2canvas: {
          scale: scaleFactor,
          scrollY: 0,
          useCORS: true,
          width: pdfWidth,
        },
        callback: (pdf) => {
          pdf.save("invoice.pdf");
        }
      });
    }
  };

  return (
    <main ref={componentRef}>
      <header className='text-black text-4xl text-center p-4 font-semibold'>
        CLOTECK
      </header>
      <section id='order-information' className='border-y-2 border-black font-medium'>
        <ul className='grid grid-cols-2 grid-rows-2 py-4 px-20'>
          <li>Order Number: <span className='font-light'>156</span></li>
          <li>Date Purchase: <span className='font-light'>11/29/2023</span></li>
          <li>Customer Name: <span className='font-light'>Andre Perez</span></li>
          <li>Region: <span className='font-light'>La Paz</span></li>
        </ul>
      </section>
      <header className='text-black text-2xl p-4 font-semibold'>
        SUMMARY
      </header>
      <header className='px-8'>
        <ul className='grid grid-cols-6 text-center grid-rows-1 gap-3 py-4 px-2 border-b border-dashed border-opacity-30 font-medium'>
          <li className='col-span-2'>Product</li>
          <li>Size(s)</li>
          <li>Quantity</li>
          <li>Unit Price</li>
          <li>Subtotal</li>
        </ul>
      </header>
      <section id='order-summary' className='px-8'>
        <InvoiceItem color="#FFFFFF" productName="Product Name" quantity={132} sizes="XL" subTotal={150} unitPrice={1.2}/>
        <InvoiceItem color="#FFFFFF" productName="Product Name" quantity={132} sizes="XL" subTotal={150} unitPrice={1.2}/>
        <InvoiceItem color="#FFFFFF" productName="Product Name" quantity={132} sizes="XL" subTotal={150} unitPrice={1.2}/>
      </section>
      <footer className='text-black text-md p-8 font-semibold text-center'>
        TOTAL: <span className='font-light'>Bs 120.00</span>
      </footer>
    </main>
  )
}
