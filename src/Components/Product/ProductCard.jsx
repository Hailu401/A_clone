import React, {useContext} from 'react'
import Rating from '@mui/material/Rating'
import CurrenyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../Dataprovider/Dataprovider';
import { Type } from '../../Pages/Utilities/action.type';


function ProductCard({product,flex, renderDesc, renderAddBtn}) {
    const {image, title, id, rating, price, description} = product;
    const [state, dispatch]= useContext(DataContext)
  
    
    const Add_To_Cart = ()=>{
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          image,
          title,
          id,
          rating,
          price,
          description,
        },
      });
    }
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        {/* <p>{product.decription}</p> */}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.2} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrenyFormat amount={price} />
        </div>
        {renderAddBtn && 
          <button className={classes.Cart_button} onClick={Add_To_Cart}>
            {" "}
            add to cart
          </button>
        }

        
       
      </div>
    </div>
  );
}

export default ProductCard;
