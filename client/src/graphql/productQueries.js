import { gql } from "@apollo/client";

// get all products
export const PRODUCTS_MAGENTO = gql`
  query{
    products(pageSize: 20, filter: {
      category_id:{
        eq:"2"
      }
    }){
      total_count
      items{
        id
        name
        created_at
        image{
          url
        }
        categories{
          name
        }
        price_range{
          minimum_price{
            final_price{
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
