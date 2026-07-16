import { Heart, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { name, category, price, image, rating, id } = product;

  return (
    <Link to={`/products/${id}`}>
      <div className="group w-full rounded-3xl overflow-hidden bg-white">
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt="Product"
            className="h-[400px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          <span className="absolute top-4 left-4 rounded-full bg-violet-500 px-4 py-1 text-sm font-semibold text-white">
            Featured
          </span>

          <button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
            <Heart size={18} className="text-gray-700" />
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              {category}
            </p>

            <div className="flex items-center gap-1 text-gray-600">
              <Star size={15} fill="currentColor" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>

          <h3 className="mt-2 text-xl font-semibold text-gray-900">{name}</h3>

          <p className="mt-2 text-xl font-bold text-black">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
