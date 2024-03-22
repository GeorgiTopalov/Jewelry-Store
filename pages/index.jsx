import React from "react";
import Layout from "../components/layout";
import HomeCategoriesComponent from "../components/home/categories";
import HomeBlogComponent from "../components/home/homeBlog";
import MostPopularComponent from "../components/home/mostPopular";
import Hero from "../components/home/hero";



const HomePage = () => {

  return (
    <Layout>
      <Hero/>
      <MostPopularComponent/>
      <HomeCategoriesComponent/>
      <HomeBlogComponent/>
    </Layout>
  );
};

export default HomePage;


// export async function getStaticProps() {
//   const { data } = await shopifyFetch(productsQuery);
//   return {
//     props: {
//       products: data.products,
//     }
//   }
// };