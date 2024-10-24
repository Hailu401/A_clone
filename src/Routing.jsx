import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import SignIn from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Orders/Order';
import Cart from './Pages/Cart/Cart';
import Result from './Pages/Results/Result';
import ProductDetail from './Pages/PrductDetail/ProductDetail';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QBLKRLvGkkHR0PPK2GMw3mvRU1Ze8HSjIuMtdOWhz0TcTIY7v5KiXZNL4rwoDZ5kG51xJ4Ha6QhqiTvCD8su8Jr00QMDe3uws"
);


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payment" element={
           <Elements stripe={stripePromise}>
          <Payment/>
        </Elements>
          } />
        <Route path="/orders" element={<Order />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
