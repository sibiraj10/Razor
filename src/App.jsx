import './App.css';
import React,{useState} from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    email: "",
    number: ""
  });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
 
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(formData.amount && formData.name && formData.email && formData.number === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_Nf3JINmS7gj2TP",
        key_secret:"zUBnLNPGDpJtSOMKbeEVKmMz",
        amount: formData.amount *100,
        currency:"INR",
        name:formData.name,
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:formData.name,
          email:formData.email,
          contact:formData.number
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="payment-form">
    <h2>Payment Integration Form</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}  required/>
      </label>
      <label>
        Amount:
        <input type="number" name="amount" value={formData.amount} onChange={handleChange}  required/>
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange}  required/>
      </label>
      <label>
        Number:
        <input type="tel" name="number" value={formData.number} onChange={handleChange} required/>
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default App;