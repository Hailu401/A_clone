import React, {useContext} from 'react';
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import {SlLocationPin} from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../Dataprovider/Dataprovider';
import { auth } from '../../Pages/Utilities/firebase';

function Header() {
  const [{user, basket}, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount;
  }, 0);
  const navigate = useNavigate();
 
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header_container}>
            {/* { logo search} */}
            <div className={classes.logo_container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              {/* delivery */}
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* search */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="search product" />
              <BsSearch size={25} />
            </div>

            {/* other section */}
            <div className={classes.order_container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                  alt="flag"
                />
                <select>
                  <option value="">EN</option>
                </select>
              </Link>
              {/* three components */}
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span
                        onClick={() => auth.signOut()}
                      >
                        Sign Out
                      </span>
                    </>
                  ): (
                    <>
                      <p> Sign in</p>
                      <span>Account & Lists</span>
                    </>
                  )}

                  {/* <p>Sign in</p> */}
                </div>
              </Link>
              {/* orders */}
              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              {/* cart */}
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
