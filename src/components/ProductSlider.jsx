import React from "react";
import ProductCard from "./ProductCard";
import { ImageSlider } from "./ImageSlider";


const ProductSlider = () => {
  return (
    <section
      className={`text-white bg-gradient-to-b from-[#020718] to-[#020617]  flex flex-col justify-center items-center`}
    >
      <h1>Featured Products</h1>
      <div
        className={`w-11/12 flex overflow-x-auto bg-[url('./src/assets/grid.png')] p-10`}
      >
        <div className={`pt-5 flex`}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
