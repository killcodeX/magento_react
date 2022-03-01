import { gql } from "@apollo/client";

// get all category products
export const All_Categories = gql`
  query {
    categories(filters: { ids: { eq: "2" } }) {
      items {
        id
        level
        name
        path
        children_count
        children {
          id
          level
          name
          path
        }
      }
    }
  }
`;

export const Categories_Products = gql`
  query ($id: String!){
    products(filter: { category_id: { eq: $id } }) {
      total_count
      items {
        sku
        id
        name
        created_at
        image {
          url
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;
