import React from "react";
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="hero-img">
        <div className="hero-content">
          <h1>Luxury Within Reach</h1>
          <div className="hero-content-bottom">
            <h3>Experience the Brilliance of Lab-Grown Diamonds</h3>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
