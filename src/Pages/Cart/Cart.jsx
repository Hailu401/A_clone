import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/Dataprovider/Dataprovider'
import ProductCard from '../../Components/Product/ProductCard';
import CurrenyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css'

function Cart() {
  const [{basket, user},dispatch]= useContext(DataContext);
  const total = basket.reduce((amount, item)=>{
    return item.price + amount
  },0)
  return (
    <Layout>
      <section className={classes.container}>
        {/* left side */}
        <div className={classes.cart_container}>
          <h2>Hello, Welcome</h2>
          
          <h3>Check your shopping basket here!</h3>

          <hr />
          {basket?.length == 0 ? (
            <p>Opps! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  flex={true}
                  renderDesc={true}
                  renderAddBtn={false}
                />
              );
            })
          )}
        </div>
        {/* right side */}
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length}items)</p>
              <CurrenyFormat amount={total} />
            </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a big gifts</small>
          </span>
          <Link to ="/payment">Proceed to Payment</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart
