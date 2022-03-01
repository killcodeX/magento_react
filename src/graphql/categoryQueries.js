import { gql } from "@apollo/client";


// get all category products
export const PRODUCTS_MAGENTO = gql`
  query {
    products(pageSize: 20, filter: { category_id: { eq: "2" } }) {
      items {
        id
        name
        sku
        image {
          url
        }
        categories {
          name
        }
        price_range {
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
        rating_summary
      }
    }
  }
`;