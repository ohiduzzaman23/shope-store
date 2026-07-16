import React from "react";
import heroImage_1 from "../assets/hero-photo-1.jpg";
import heroImage_2 from "../assets/hero-photo-2.jpg";
import heroImage_3 from "../assets/hero-photo-3.jpg";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Container>
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 p-15">
          <div className="relative w-fit mx-auto">
            {/* Image 1 */}
            <div className="relative z-20 overflow-hidden rounded-2xl w-fit mx-auto pb-56">
              <img
                src={heroImage_1}
                alt=""
                className="w-[420px] h-[560px] object-cover scale-110 hover:scale-100 transition-transform duration-700"
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
            <div className="absolute right-[-60px] bottom-[-60px] z-10 hover:z-30">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={heroImage_3}
                  alt=""
                  className="w-[220px] h-[280px] object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6 mr-10">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
