import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import axios from "axios";
import SubNavbar from "../SubNavbar/SubNavbar";
import Hero from "../Hero/Hero";

export default function ProductDetail({ setIsFetching, isFetching, handleAddItemToCart, handleRemoveItemFromCart }) {
  const [product, setProduct] = React.useState({});
  let { productId } = useParams();
  console.log(productId);

  React.useEffect(() => {
    setIsFetching(true);
    axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`).then(
      function (response) {
        setProduct(response.data.product); 
        setIsFetching(false);
        console.log('product: ' + JSON.stringify(product));
      }
    )
  }, []);

  return (
    <div className="product-detail-wrapper">
      <div class='spacer'></div>
      <Hero></Hero>
      <SubNavbar></SubNavbar>
      <div className="product-detail">
        {
          isFetching ? <h1 className="loading">Loading</h1> : <ProductView product={product} productId={product.id} quantity={product.quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
        }
      </div>
    </div>
  )

  // old code
  // return (
  //   <div className="product-detail">
  //     {
  //       isFetching ? <h1 className="loading">Loading</h1> : <ProductView product={product} productId={product.id} quantity={product.quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
  //     }
  //   </div>
  // )
}