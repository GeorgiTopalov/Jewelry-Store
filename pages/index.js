import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import HomeCategoriesComponent from "../components/homeCategories";"../components/homeCategories.js";

const HomePage = () => {
  return (
    <Layout>
      <div className="hero-img">
        <div className="hero-content">
          <h1>Luxury Within Reach</h1>
          <div className="hero-content-bottom">
            <h3>Experience the Brilliance of Lab-Grown Diamonds</h3>
            <Link href="/contactus" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
      <div>
      <HomeCategoriesComponent/>
      </div>
    </Layout>
  );
};

export default HomePage;
