import * as React from "react";
import "./SubNavbar.css";

export default function SubNavbar({
  products,
  setProducts,
  searchContent,
  setSearchContent,
  handleSearchChange,
  category,
  setCategory,
}) {
  const [type, setType] = React.useState("all");

  function handleSearch() {
    // commented out
    const tempProducts = products.filter((element) => {
      return element.name.toLowerCase().includes(searchContent.toLowerCase());
    });
    console.log("after filtering: " + tempProducts);
    setProducts(tempProducts);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.id);
    e.target.className = "is-active";
    setType(e.target.id);
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
            {/* <button className="search-button" onClick={handleSearch}>
              <i className="material-icons">search</i>
            </button> */}
            <button className="search-button">
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
            <li className={type === "all" ? "is-active" : ""}>
              <button id="all" onClick={handleCategoryChange}>
                All Categories
              </button>
            </li>
            <li className={type === "clothing" ? "is-active" : ""}>
              <button id="clothing" onClick={handleCategoryChange}>
                Clothing
              </button>
            </li>
            <li className={type === "food" ? "is-active" : ""}>
              <button id="food" onClick={handleCategoryChange}>
                Food
              </button>
            </li>
            <li className={type === "accessories" ? "is-active" : ""}>
              <button id="accessories" onClick={handleCategoryChange}>
                Accessories
              </button>
            </li>
            <li className={type === "tech" ? "is-active" : ""}>
              <button id="tech" onClick={handleCategoryChange}>
                Tech
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
