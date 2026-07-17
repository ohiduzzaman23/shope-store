import React from "react";
import heroImage_1 from "../assets/hero-photo-1.jpg";
import heroImage_2 from "../assets/hero-photo-2.jpg";
import heroImage_3 from "../assets/hero-photo-3.jpg";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="hero min-h-screen flex pt-20 ">
      <Container>
        <div className="hero-content flex-1 flex-col-reverse lg:flex-row-reverse gap-8 px-4 py-10 lg:pr-6">
          <div className="relative w-fit mx-auto">
            {/* Image 1 */}
            <div className="relative z-20 overflow-hidden rounded-2xl w-fit mx-auto pb-56">
              <img
                src={heroImage_1}
                alt=""
                className="w-[260px] sm:w-[320px] lg:w-[420px] h-[340px] sm:h-[430px] lg:h-[560px] object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute left-[-100px] top-1/3 -translate-y-1/2 z-10 hover:z-30 transition-all duration-300">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={heroImage_2}
                  alt=""
                  className="w-[180px] h-[240px] object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div className="absolute right-[-60px] bottom-[-60px] z-10  hover:z-30">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={heroImage_3}
                  alt=""
                  className="w-[220px] h-[280px] object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <span className="border border-gray-400 rounded-full p-2 tracking-[0.2em] ">
              Autumn / Winter 2026
            </span>
            <h1 className="text-7xl font-bold font-display mt-5 leading-tight">
              Wear the
              <br></br>
              quiet luxury
              <br></br>
              of now.
            </h1>
            <p className="py-6 ">
              Considered essentials in natural fibers, cut by hand and made to
              last. A wardrobe built around restraint — and the confidence it
              gives you.
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
