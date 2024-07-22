import React from "react";
import { InfiniteProductSlider } from "./ui/InfiniteProductSlider";
import { ProductDetails1, ProductDetails2 } from "../constants/AllConstants";

const ProductSlider = () => {
  return (
    <div id="products_slider">
      <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
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
        </section>
      </div>
    </div>
  );
};

export default ProductSlider;
