import * as React from "react"
import "./ProductDetail.css"

export default function ProductDetail({ handleAddItemToCart, handleRemoveItemFromCart }) {
  const [product, setProduct] = React.useState({});

  // let { productId } = React.useParams();

  // React.useEffect(() => {
  //   axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`).then(
  //     function (response) {
  //       setProducts(response.data.products);
  //     }
  //   )
  // }, []);

  return (
    <div className="product-detail">

    </div>
  )
}


// axios.get(`http://localhost:5000/brand/${marqueName}`)
//     .then(response => {
//         setMarqueDetails(response.data)
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     })

// }, []);