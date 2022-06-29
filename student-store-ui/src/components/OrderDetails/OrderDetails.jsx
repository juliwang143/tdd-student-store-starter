import * as React from "react";
import "./OrderDetails.css";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import axios from "axios";
import SubNavbar from "../SubNavbar/SubNavbar";
import Hero from "../Hero/Hero";
import OrderDetail from "../OrderDetail/OrderDetail";
import NotFound from "../NotFound/NotFound";

export default function OrderDetails({ isFetching, setIsFetching }) {
  const [order, setOrder] = React.useState({});
  let { orderId } = useParams();

  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    // setIsFetching(true);
    axios
      .get(`http://localhost:3001/store/orders/${orderId}`)
      .then(function (response) {
        setOrder(response.data.order.purchase);
        // setIsFetching(false);
      })
      .catch((error) => {
        setNotFound(true);
      });
  }, []);

  //   if (notFound) {
  //     return <NotFound></NotFound>;
  //   } else {
  //     return (
  //       <div className="product-detail-wrapper">
  //         <div className="spacer"></div>
  //         <Hero></Hero>
  //         <div className="product-detail">
  //           {isFetching ? (
  //             <h1 className="loading">Loading</h1>
  //           ) : (
  //             <ProductView
  //               product={product}
  //               productId={product.id}
  //               quantity={product.quantity}
  //               handleAddItemToCart={handleAddItemToCart}
  //               handleRemoveItemFromCart={handleRemoveItemFromCart}
  //             />
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }

  // TODO - not found
  return (
    <div className="product-detail-wrapper">
      <div className="spacer"></div>
      <Hero></Hero>
      <div className="product-detail">
        {isFetching ? (
          <h1 className="loading">Loading</h1>
        ) : (
          <OrderDetail order={order} orderId={orderId} />
        )}
      </div>
    </div>
  );
}
