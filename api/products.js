import { shopifyFetch } from "../utils/shopify";

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
      products(first: 100) {
        edges {
          node {
            title
            handle
            tags
            priceRange {
              minVariantPrice {
                amount
            }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
              } 
              }
            }
          }
        }`,
    });
}

export async function getProductById(id) {
  return shopifyFetch({
    query: `{
        product(id: "${id}") {
          edges {
          id
          title
          description
          tags
          productType
          handle
          images(first: 5) {
            edges {
              node {
                src
                altText
              }
            }
          }
          variants(first: 5) {
            edges {
              node {
                id
                title
                image(first: 5) {
                  src
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
  }`,
  });
}

export async function getProductsByTag(tag) {
  return shopifyFetch({
    query: `{
      products(first: 100, query: "tag:${tag}") {
        edges {
          node {
            title
            tags
            productType
            handle
            images(first: 2) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  image(first: 4) {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
  });
}

export async function getProductsByType(productType) {
  return shopifyFetch({
    query: `{
      products(first: 100, query: "tag:${productType}") {
        edges {
          node {
            title
            tags
            handle
            images(first: 4) {
              edges {
                node {
                  src
                  altText
                }
              }
            }
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  image(first: 4) {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
  });
}

export default {
  getAllProducts,
  getProductById,
  getProductsByTag,
  getProductsByType,
};
