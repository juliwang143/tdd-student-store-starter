import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import axios from "axios";
import SubNavbar from "../SubNavbar/SubNavbar";
import Hero from "../Hero/Hero";

import NotFound from "../NotFound/NotFound";

export default function ProductDetail({
  setIsFetching,
  isFetching,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  const [product, setProduct] = React.useState({});
  let { productId } = useParams();

  // added
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
      .then(function (response) {
        console.log("rearweraw: " + response.data);

        setProduct(response.data.product);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log("oops", error);
        setNotFound(true);
      });
  }, []);

  if (notFound) {
    return <NotFound></NotFound>;
  } else {
    return (
      <div className="product-detail-wrapper">
        <div className="spacer"></div>
        <Hero></Hero>
        <SubNavbar></SubNavbar>
        <div className="product-detail">
          {isFetching ? (
            <h1 className="loading">Loading</h1>
          ) : (
            <ProductView
              product={product}
              productId={product.id}
              quantity={product.quantity}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemFromCart={handleRemoveItemFromCart}
            />
          )}
        </div>
      </div>
    );
  }
}
