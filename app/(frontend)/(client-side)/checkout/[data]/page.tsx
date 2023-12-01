import React from 'react';

import OrderSummary from '@/app/components/ui/OrderSummary';
import PaymentForm from '@/app/components/ui/PaymentForm';

const CheckoutPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="mx-20">
        <OrderSummary />
      </div>
      <div className="border-t md:border-t-0 md:border-l px-4 mt-4 md:mt-0 mb-8 md:mb-0">
        <PaymentForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
