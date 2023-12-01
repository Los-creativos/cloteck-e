'use client'
import React, { useEffect, useState } from 'react';

const OrderSummary = () => {
  const [orderSummaryData, setOrderSummaryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrderSummaryData = async () => {
      try {
        const data = [
          { id: 1, name: 'Product 1', unitPrice: 19.99, quantity: 2, productTotal: 39.98 },
          { id: 2, name: 'Product 2', unitPrice: 29.99, quantity: 1, productTotal: 29.99 },
          { id: 3, name: 'Product 3', unitPrice: 14.99, quantity: 3, productTotal: 44.97 },
        ];
        

        setOrderSummaryData(data);
      } catch (error) {
        console.error('Error fetching order summary data:', error);
      }
    };

    fetchOrderSummaryData();
  }, []);

  return (
    <div className="w-full overflow-x-auto max-h-96">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Product</th>
              <th className="py-2 px-4 border">Unit Price</th>
              <th className="py-2 px-4 border">Quantity</th> 
              <th className="py-2 px-4 border">Product Total</th>
            </tr>
          </thead>
          <tbody>
            {orderSummaryData.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="py-2 px-4 border">{order.name}</td>
                <td className="py-2 px-4 border">{`Bs ${order.unitPrice.toFixed(2)}`}</td>
                <td className="py-2 px-4 border">{order.quantity}</td> 
                <td className="py-2 px-4 border">{`Bs ${order.productTotal.toFixed(2)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <div className="flex justify-end">
            <div className="w-1/2">
              <p className="text-left">Taxes: </p>
            </div>
            <div className="w-1/2">
              <p className="text-left">Total:</p>
            </div>
            <div className="w-1/2">
              <p className="text-left">Total with Taxes: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary