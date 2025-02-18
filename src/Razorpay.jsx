import React, { useState } from 'react';
import Razorpay from 'razorpay';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    console.log("hello");
    
    if (amount === ""){
        alert("please enter your amount")
    }
    const options = {
      key: 'rzp_test_50RogmDCufETv6', 
      key_secret:"mwEiaB1wKrojWMHFCB8CBB8W",
      amount: amount * 100, 
      currency: 'INR',
      name: 'Sibi',
      description: 'Test Transaction',
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'Sibiraj',
        email: 'sibirajselvam1@gmail.com.com',
        contact: '7358793201',
      },
      notes: {
        address: 'razorpay',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <br/>
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
};

export default PaymentForm;
