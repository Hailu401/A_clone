import React from 'react'
import classes from "./Category.module.css";
import {Link} from 'react-router-dom'
function CategoryCard({data}) {
// const { title, image} = data;
// console.log(data)
  return (
    <div className={classes.Category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>

        <img src={data?.image} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
