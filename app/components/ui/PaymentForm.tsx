"use client";

import React, { useState } from 'react';
import Button from './Button';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCVC] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const isCardNumberValid = () => {
    return /^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber);
  };

  const isCVCValid = () => {
    return /^\d{3}$/.test(cvc);
  };

  const isCardHolderNameValid = () => {
    return /^[A-Za-z ]+$/.test(cardHolderName);
  };

  const isExpirationDateValid = () => {
    const currentDate = new Date();
    const month = parseInt(expirationMonth, 10);
    const year = parseInt(`20${expirationYear}`, 10);
    const expiration = new Date(year, month - 1);

    return (
      /^\d{2}$/.test(expirationMonth) &&
      /^\d{2}$/.test(expirationYear) &&
      expiration > currentDate &&
      expiration.getMonth() === month - 1
    );
  };

  const handleCardNumberChange = (e: any) => {
    const newValue = e.target.value.replace(/[^0-9 ]/g, '').slice(0, 19);
    setCardNumber(newValue);
  };

  const handleCVCChange = (e: any) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 3);
    setCVC(newValue);
  };

  const handleExpirationMonthChange = (e: any) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
    setExpirationMonth(newValue);
  };

  const handleExpirationYearChange = (e: any) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
    setExpirationYear(newValue);
  };

  const handleSubmit = () => {
    if (isCardNumberValid() && isCVCValid() && isCardHolderNameValid() && isExpirationDateValid()) {
      console.log('Payment successful');
    } else {
      console.error('Invalid payment details');
      setShowErrors(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className={`mt-1 block w-full py-2 px-3 border ${
            isCardNumberValid() ? 'border-gray-300' : 'border-red-500'
          } bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          placeholder="1234 1234 1234 1234"
        />
        {showErrors && !isCardNumberValid() && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid card number.</p>
        )}
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">CVC/CVV</label>
        <input
          type="text"
          value={cvc}
          onChange={handleCVCChange}
          className={`mt-1 block w-full py-2 px-3 border ${
            isCVCValid() ? 'border-gray-300' : 'border-red-500'
          } bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          placeholder="123"
        />
        {showErrors && !isCVCValid() && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid CVC/CVV.</p>
        )}
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Card Holder Name</label>
        <input
          type="text"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
          className={`mt-1 block w-full py-2 px-3 border ${
            isCardHolderNameValid() ? 'border-gray-300' : 'border-red-500'
          } bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          placeholder="Anghelo Zambrana"
        />
        {showErrors && !isCardHolderNameValid() && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid card holder name.</p>
        )}
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            value={expirationMonth}
            onChange={handleExpirationMonthChange}
            className={`mt-1 md:mr-2 md:flex-1 py-2 px-3 border ${
              /^\d{2}$/.test(expirationMonth) ? 'border-gray-300' : 'border-red-500'
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
            placeholder="MM"
          />
          <input
            type="text"
            value={expirationYear}
            onChange={handleExpirationYearChange}
            className={`mt-1 md:flex-1 py-2 px-3 border ${
              /^\d{2}$/.test(expirationYear) ? 'border-gray-300' : 'border-red-500'
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm mt-2 md:mt-0`}
            placeholder="YY"
          />
        </div>
        {showErrors && !isExpirationDateValid() && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid expiration date.</p>
        )}
      </div>
      <Button
        onClick={handleSubmit}
        className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Complete Order
      </Button>
    </div>
  );
};

export default PaymentForm;
