import React from 'react'
import classes from "./Category.module.css";
import Category from './Category';
function CategoryCard({data}) {
console.log(data);
  return (
    <div className={classes.Category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>

        <img src={data.image} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
