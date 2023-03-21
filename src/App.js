import './App.css';
import React, { useState } from 'react';

function App() {


  const [item, setItem] = useState(
    {itemTitle:"",
    itemDescription:"",
    itemType:"",
    itemPrice:"",
    itemImg:""
  })
  
  return (
    <div className="App">
      <div className="topnav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
      </div>
      <div className='homeContainer'>Shitbikes.de</div>
    </div>
  );
}

export default App;
