
import './app.css'

import Carousel from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import Product from './Components/Product/Product';

export function App() {
  

  return (
    <>
      <Header/>
      <Carousel/>
      <Category/>
      <Product/>
    </>
  );
}
