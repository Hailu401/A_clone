import React from 'react'
import Rating from '@mui/material/Rating'
import CurrenyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
function ProductCard({product,flex, renderDesc}) {
    const {image, title, id, rating, price, description} = product;
  return (
    // <div className={`${classes.card_container} if(flex !== ""){${classes.product_flexed}else { " " }}`}>
    <div
      className={`${classes.card_container} ${flex?classes.product_flexed : ''}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth: "750px"}}>{description}</div>}
        {/* <p>{product.decription}</p> */}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrenyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
