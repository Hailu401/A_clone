import React, {useContext, useEffect, useState} from 'react'
import Layout from '../../Components/Layout/Layout'
import { db } from '../Utilities/firebase';
import { DataContext } from '../../Components/Dataprovider/Dataprovider';
import classes from './Order.module.css'
import ProductCard from '../../Components/Product/ProductCard';

function Order() {
const [{user}, dispatch] = useContext(DataContext);
const [Orders, setOrders] = useState([]);

useEffect(()=>{
if(user){
db.collection("users").doc(user.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapshot)=>{
  // console.log(snapshot);
 setOrders(
  snapshot.docs.map((doc)=>({
    id: doc.id,
    data:doc.data()
  }))
 )
})

}else {
  setOrders([]);

}
},[])

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {
            Orders?.length == 0 && <div style={{padding:'30px', textAlign: 'center', fontWeight: '300'}}>You have no Orders!</div>
          }
        
        {/* ordered items */}
       
          {
            Orders.map((eachOrder, i)=>{
              return (
                <div key={i}>
                  <hr />
                  <p >
                    {" "}
                    <span style={{fontWeight: 'bold'}}>Order Id:</span> {eachOrder?.id}
                  </p>
                  {eachOrder?.data?.basket?.map((Order) => (
                    <ProductCard flex={true} product={Order} key={Order.id} />
                  ))}
                </div>
              );
            })
          }
        </div>
      </section>
      
    </Layout>
  );
}

export default Order
