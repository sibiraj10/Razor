import React from 'react'
import { useState, useEffect } from 'react';

const Pcpt = () => {
  const [currency,setCurrency]=useState({})
 const [loading,setLoading]=useState(true)
      useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
          .then(response => response.json())
          .then(data => {
            setCurrency(data);
            setLoading(false);
            console.log(data);
          })
      }, []);

   if (loading){
    return <p>loading....</p>
}

  return (
    <div>
        <h1>Tracker</h1>
        <ul>
            {currency.map((data,index)=>(
                <li key={index}>
                      
                </li>
            ))}
        </ul>

    </div>
  )
  
}

export default Pcpt