import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'

function Product() {

  const [products, setProducts] = useState();
  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      setProducts(res.data)

        console.log(res);
    }).catch((err)=>{
        console.log(err)
    });
 }, [])

  return (
    <section className={classes.Allproduct_section}>
    <div className={classes.Allproduct_container}>

        {
            products && products.map((singleProduct)=>{
            return <ProductCard product={singleProduct} key={singleProduct.id}/>
            })

         }


    </div>
    </section>
  )
}

export default Product;
