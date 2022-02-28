import { gql } from "@apollo/client";

// get all products
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

// get single products
export const SINGLE_PRODUCTS_MAGENTO = gql`
  query ($id: String!) {
    products(filter: { sku: { eq: $id } }) {
      items {
        sku
        id
        name
        created_at
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
        description {
          html
        }
        rating_summary
        amazon_link
        flipkart_link
        meesho_link
        myntra_link
        meta_description
        only_x_left_in_stock
        review_count
      }
    }
  }
`;
