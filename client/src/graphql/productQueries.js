import { gql } from "@apollo/client";

// get all products
export const PRODUCTS_MAGENTO = gql`
  query{
    products(pageSize: 20, filter: { category_id: { eq: "2" } }) {
      total_count
      items {
        id
        name
        description {
          html
        }
        created_at
        media_gallery {
          url
        }
      }
    }
  }
`;
