import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Root;
