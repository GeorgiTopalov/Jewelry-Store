import { shopifyFetch } from "../utils/shopify";

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
        products(sortKey: TITLE, first: 100) {
          edges{
            node {
              id
        title
        description
        tags
        productType
        variants(first: 5) {
          edges {
            node {
              id
              title
              priceV2 {
                amount
                currencyCode
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

export async function getProductById(id) {
  return shopifyFetch({
    query: `{
        product(id: "${id}") {
          id
        title
        description
        tags
        productType
        variants(first: 5) {
          edges {
            node {
              id
              title
              priceV2 {
                amount
                currencyCode
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

export default getAllProducts;
