import React from "react";
import { InfiniteProductSlider } from "./ui/InfiniteProductSlider";
import {
  ProductDetails1,
  ProductDetails2,
  ProductDetails3,
  ProductDetails4,
} from "../constants/AllConstants";

const ProductSlider = () => {
  return (
    <div
      id="products_slider"
      className=" shadow-black dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] w-full relative flex items-center justify-center"
    >
      <section
        className={`text-white  pt-24 bg-transparent  flex flex-col justify-center items-center text-4xl`}
      >
        {/* <h1>bg-[url('./src/assets/grid.png')]</h1> */}
        <h1 className={`text-4xl font-light `}>Showcased Products</h1>
        <div>
          <InfiniteProductSlider
            items={ProductDetails1}
            direction="right"
            speed="slow"
          />
        </div>
        <div>
          <InfiniteProductSlider
            items={ProductDetails2}
            direction="left"
            speed="slow"
          />
        </div>
        <div>
          <InfiniteProductSlider
            items={ProductDetails3}
            direction="right"
            speed="slow"
          />
        </div>
        <div>
          <InfiniteProductSlider
            items={ProductDetails4}
            direction="left"
            speed="slow"
          />
        </div>
      </section>
    </div>
  );
};

export default ProductSlider;
