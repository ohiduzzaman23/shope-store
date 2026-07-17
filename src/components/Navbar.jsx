import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { HiBars3 } from "react-icons/hi2";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Container from "./Container";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-base-100 shadow-md">
      <Container>
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <HiBars3 className="text-2xl" />
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/products">Products</Link>
                </li>

                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>

                <li>
                  <button>Contact</button>
                </li>
              </ul>
            </div>

            <Link
              to="/"
              className="text-2xl font-bold tracking-wider font-display"
            >
              Fashion Store
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>

              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="navbar-end">
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />

              <CiLight className="swap-off text-3xl" />

              <MdDarkMode className="swap-on text-3xl" />
            </label>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
