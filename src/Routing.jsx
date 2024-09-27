import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import SignIn from './Pages/Auth/SignIn';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Orders/Order';
import Cart from './Pages/Cart/Cart';
import Result from './Pages/Results/Result';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/category/:categoryName" element={< Result/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
