// import { useState, useEffect } from 'react';
// import { getAllProducts } from '../api/products';

// const useProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await getAllProducts();
//         setProducts(response);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []); 
//   return { products, loading, error };
// };

// export default useProducts;

import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(process.env.SHOPIFY_API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Shopify-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
          },
          body: JSON.stringify({
            query: `
              query {
                products(first: 10, where: {productType: "ring"}) {
                  edges {
                    node {
                      id
                      title
                      price
                      images(first: 2) {
                        edges {
                          node {
                            src
                            altText
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
          }),
        });

        const { data } = await response.json();
        setProducts(data.products.edges.map(edge => ({
          id: edge.node.id,
          title: edge.node.title,
          price: edge.node.price,
          images: edge.node.images.edges.map(imageEdge => ({
            src: imageEdge.node.src,
            alt: imageEdge.node.altText,
          })),
        })));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;