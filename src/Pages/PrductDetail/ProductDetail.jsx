import React, {useEffect, useState} from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPints';
import ProductCard from '../../Components/Product/ProductCard';
import { BiLoader } from 'react-icons/bi';

function ProductDetail() {
  const[isLoading, setIsLoading] = useState(false)
  const {productId} = useParams();
  const[product, setproduct] = useState({});

  useEffect(()=>{
    setIsLoading(true)
axios.get(`${productUrl}/products/${productId}`)
.then((res)=>{
setproduct(res.data)
setIsLoading(false)
// console.log(res.data)
}).catch((err)=>{
  console.log(err)
  setIsLoading(false)
})
  },[])
  return (
    <Layout>
      {isLoading? (<BiLoader/>):(<ProductCard
     product={product}
     flex={true}
     renderDesc = {true}
     renderAddBtn={true}
     />
      )}
   
    </Layout>
  );
}

export default ProductDetail
