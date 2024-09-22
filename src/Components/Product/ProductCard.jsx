import React from 'react'
import Rating from '@mui/material/Rating'
import CurrenyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
function ProductCard({product}) {
    const {image, title, id, rating, price} = product;
  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>

      <div>
        <h3>{title}</h3>
        {/* <p>{product.decription}</p> */}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={5} precision={0.1} />
          {/* count */}
          <small>{Rating}</small>
        </div>
        <div>
          {/* price */}
          <CurrenyFormat amount={product.price} />
        </div>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
