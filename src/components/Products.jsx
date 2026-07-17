import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";
import Container from "./Container";

const Products = () => {
  const products = useLoaderData();
  return (
    <Container>
      <div className="mt-24">
        <div className="text-center mb-10">
          <p className="text-xl text-gray-400 tracking-[0.2em]">Collection</p>
          <h2 className="font-display text-5xl mt-3 font-semibold">
            All Products
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
