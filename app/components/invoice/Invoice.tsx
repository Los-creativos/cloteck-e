'use client'

import { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import InvoiceItem from "./InvoiceItem";
import Button from "../ui/Button";
import { getOrderById } from "@/app/(backend)/api/order/order.service";


export default function Invoice ({ id }: { id: number }) {
  const [orderData, setOrderData] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState(0.00)
  const [orderDate, setOrderDate] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOrderById(id);
        setOrderData(data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };
    if (!orderData) {
      fetchData();
    }

    const getTotalPrice = () => {
      if (orderData) {
        let total = 0.00;
        orderData.OrderProduct.forEach((product: any) => {
          total += product.Product.price * product.quantity;
        });
        setOrderDate("" + orderData.date)
        setUserName("" + orderData.customer.name + " " + orderData.customer.last_name)
        setTotalPrice(total);
      }
    }
    getTotalPrice();

  }, [id, orderData]);

  const componentRef = useRef<HTMLDivElement>(null);

  const handlePdf = () => {
    if (componentRef.current && orderData) {
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
    <section>
      <Button onClick={handlePdf} className={'w-full'} text={'Download Invoice as PDF'}/>
      <div ref={componentRef}>
        <header className='text-black text-4xl text-center p-4 font-semibold'>
          CLOTECK
        </header>
        <section id='order-information' className='border-y-2 border-black font-medium'>
          <ul className='grid grid-cols-2 grid-rows-2 py-4 px-20'>
            <li>Order Number: <span className='font-light'>{id}</span></li>
            <li>Date Purchase: <span className='font-light'>{orderDate}</span></li>
            <li>Customer Name: <span className='font-light'>{userName}</span></li>
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
          {orderData?.OrderProduct.map(((product: any) => {

            return (
              <InvoiceItem
                key={crypto.randomUUID()}
                color={product.color_name}
                productName={product.Product.name}
                quantity={product.quantity}
                sizes={product.size_name}
                subTotal={parseFloat((product.quantity * product.Product.price).toFixed(2))}
                unitPrice={product.Product.price}
              />
            );
          }))}
        </section>
        <footer className='text-black text-md p-8 font-semibold text-center'>
          TOTAL: <span className='font-light'>Bs {totalPrice}</span>
        </footer>
      </div>
    </section>
  )
}
