import React from 'react';
import classes from "./Category.module.css";
import {catagoryInfos} from './catagoryFullInfo'
import CategoryCard from './CategoryCard'

function Category() {
  return (
    <section className={classes.Category_container}>
      
     
      {
        catagoryInfos.map((Infos) => (
          <CategoryCard data = {Infos} />
            //  console.log(data);
        ))
      }
    </section>
  )
}

export default Category;
