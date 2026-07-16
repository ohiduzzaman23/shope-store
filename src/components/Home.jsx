import React from "react";
import Container from "./Container";
import { Link, useLoaderData } from "react-router";
import ProductCard from "./ProductCard";
import Hero from "./Hero";

const Home = () => {
  const products = useLoaderData();
  return (
    <Container>
      <section>
        <Hero></Hero>
      </section>
      <div>
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 md:text-base">
              Editor's edit
            </p>
            <h2 className="font-display text-5xl mt-3 font-semibold">
              Featured this season
            </h2>
          </div>
          <div className="mt-2 ">
            <Link to="/products" className="">
              View All Products →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
