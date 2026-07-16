import React from "react";
import Container from "./Container";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  const handleTheme = (checked) => {
    const html = document.querySelector("html");
    if (checked) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="max-lg:collapse lg:mb-6 w-full rounded-md shadow-sm dark:shadow-white/10">
      <Container>
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <Link
              to={"/"}
              className="primary font-semibold text-2xl text-[var(--color-primary)] "
            >
              Fashion Store
            </Link>
          </div>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {/* Dark & Light theme */}
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <CiLight />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <MdDarkMode />
              </svg>
            </label>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
