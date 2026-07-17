import { Heart, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Container from "./Container";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";

const ProductDetails = () => {
  const products = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const { name, category, price, image, rating, description } = products;

  const { toggleWishlist, isWishlisted } = useWishlist();
  return (
    <Container>
      <div className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src={image}
              alt=""
              className="w-full rounded-3xl object-cover lg:h-[720px]"
            />
          </div>

          {/* category */}
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
              {category}
            </p>

            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3">
              {name}
            </h1>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-4 mt-5">
              <h2 className="text-4xl font-bold">${price}</h2>

              <div className="flex items-center gap-2 text-gray-500">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                <span>{rating}</span>
                <span>·</span>
                <span>240 reviews</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 text-gray-600 leading-8">{description}</p>

            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 mt-8">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              In stock — ships in 48h
            </div>

            <div className="mt-10">
              <div className="flex justify-between">
                <h3 className="font-semibold">Color</h3>
                <span className="text-gray-500">Black</span>
              </div>

              <div className="flex gap-4 mt-5">
                <button className="w-11 h-11 rounded-full bg-black border-4 border-indigo-500"></button>

                <button className="w-11 h-11 rounded-full bg-white border"></button>

                <button className="w-11 h-11 rounded-full bg-[#d8c49b] border"></button>
              </div>
            </div>

            {/* Cart */}
            <div className="flex flex-col md:flex-row gap-4 mt-12">
              <div className="flex items-center justify-between border rounded-full px-6 py-4 w-full md:w-40">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <FaMinus size={12} />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 h-8 text-center border-none text-sm outline-none"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <FaPlus size={12} />
                </button>
              </div>

              <button className="flex-1 rounded-full bg-color-primary hover:bg-[#022463] text-white py-5 flex items-center justify-center gap-3 font-semibold  transition">
                <ShoppingBag size={18} />
                Add to cart
              </button>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(products)}
                className="w-16 h-16 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
              >
                <Heart
                  size={22}
                  className={
                    isWishlisted(products.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-500"
                  }
                />
              </button>
            </div>

            {/* Features */}
            <div className="border-t mt-12 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Truck className="text-gray-700" />
                <div>
                  <h4 className="font-semibold">Free shipping</h4>
                  <p className="text-gray-500 text-sm">On orders over $150</p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="text-gray-700" />
                <div>
                  <h4 className="font-semibold">Lifetime repair</h4>
                  <p className="text-gray-500 text-sm">We'll always mend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
