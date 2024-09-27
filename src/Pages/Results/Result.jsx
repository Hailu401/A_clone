import React, {useState, useEffect} from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPints';
import ProductCard from '../../Components/Product/ProductCard';
import classes from './Result.module.css'

function Result() {
  const [results, setResults] = useState([]);

  const {categoryName} = useParams();
  console.log(categoryName)
  useEffect(() => {
   axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res) => {
    setResults(res.data);
    // console.log(res.data);
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  }, [])
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {
            results?.map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))
          }
        </div>
      </section>
    </Layout>
  );    
}

export default Result
