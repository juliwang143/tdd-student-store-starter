import * as React from "react";
import "./SubNavbar.css";

export default function SubNavbar({ products, setProducts }) {
  const [searchContent, setSearchContent] = React.useState("");

  function handleSearchChange(e) {
    setSearchContent(e.target.value);
  }

  function handleSearch() {
    const tempProducts = products.filter((element) => {
      return element.name.toLowerCase().includes(searchContent.toLowerCase());
    });

    console.log("after filtering: " + tempProducts);
    setProducts(tempProducts);
  }

  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchContent}
              onChange={handleSearchChange}
            />
            <button className="search-button" onClick={handleSearch}>
              <i className="material-icons">search</i>
            </button>
          </div>
          <div className="links">
            {/* <span className="help">
                        <i className="material-icons">help</i>Help
                    </span> */}
            <div className="cart">
              <a href="/">
                My Cart<i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row" id="buy">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu open">
            <li className="is-active">
              <button>All Categories</button>
            </li>
            <li className="">
              <button>Clothing</button>
            </li>
            <li className="">
              <button>Food</button>
            </li>
            <li className="">
              <button>Accessories</button>
            </li>
            <li className="">
              <button>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
