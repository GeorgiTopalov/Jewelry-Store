import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-img">
      <div className="hero-content">
        <h1>Luxury Within Reach</h1>
        <div className="hero-content-bottom">
          <h3>Experience the Brilliance of Lab-Grown Diamonds</h3>
          <Link href="/contactus" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
