import React from "react";
import Layout from "../components/layout";
import HomeCategoriesComponent from "../components/home/categories";
import Hero from "../components/home/hero";


const HomePage = () => {
  return (
    <Layout>
      <Hero/>
      <HomeCategoriesComponent/>
    </Layout>
  );
};

export default HomePage;
