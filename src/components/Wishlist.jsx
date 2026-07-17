import { Heart, Star } from "lucide-react";
import { Link } from "react-router";
import { useWishlist } from "../context/WishlistContext";
import Container from "./Container";

const Wishlist = () => {
  const { wishlist, removeWishlist } = useWishlist();

  const totalItems = wishlist.length;
  const totalPrice = wishlist.reduce((total, item) => total + item.price, 0);

  if (wishlist.length === 0) {
    return (
      <Container>
        <div className="pt-32 min-h-[70vh] flex flex-col items-center justify-center text-center">
          <Heart size={70} className="text-gray-300" />

          <h2 className="text-4xl font-bold mt-6">Your Wishlist is Empty</h2>

          <p className="text-gray-500 mt-3 max-w-md">
            Looks like you haven't added any products yet. Start exploring and
            save your favorite items.
          </p>

          <Link
            to="/products"
            className="btn mt-8 rounded-full bg-color-primary text-white hover:bg-[#002e83]"
          >
            Continue Shopping
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <section className="pt-28 pb-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold">My Wishlist</h1>

            <p className="text-gray-500 mt-2">
              {totalItems} saved {totalItems > 1 ? "items" : "item"}
            </p>
          </div>

          <div className="flex gap-6">
            <div className="bg-base-200 rounded-2xl px-8 py-5 text-center min-w-[170px]">
              <p className="text-color-accent  text-sm">Total Items</p>
              <h2 className="text-3xl font-bold mt-2">{totalItems}</h2>
            </div>

            <div className="bg-color-primary text-white rounded-2xl px-8 py-5 text-center min-w-[170px]">
              <p className="text-sm opacity-80">Total Value</p>
              <h2 className="text-3xl font-bold mt-2">
                ${totalPrice.toFixed(2)}
              </h2>
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="group bg-base-100 rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
                  {product.category}
                </p>

                <h2 className="text-xl font-semibold mt-2 line-clamp-1">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-3">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{product.rating}</span>
                </div>

                <h3 className="text-2xl font-bold text-color-primary mt-5">
                  ${product.price}
                </h3>

                <div className="mt-auto pt-6 flex gap-3">
                  <button className="flex-1 btn rounded-full bg-color-primary text-white hover:bg-[#002e83]">
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeWishlist(product.id)}
                    className="btn btn-outline btn-error rounded-full"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Wishlist;
