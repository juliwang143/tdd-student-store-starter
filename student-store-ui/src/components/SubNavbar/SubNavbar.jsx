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
  // temporarily commented out below stuff
  // const [searchContent, setSearchContent] = React.useState("");

  // try passing this commented out temporarily
  // function handleSearchChange(e) {
  //   // console.log("event:: " + JSON.stringify(e.target.value));
  //   setSearchContent(e.target.value);
  // }

  // handleSearchChange = (e) => {
  //   console.log("event:: " + JSON.stringify(e.target.value));
  //   setSearchContent(e.target.value);
  // };

  // temporarily commented out
  // function handleSearch() {
  //   const tempProducts = products.filter((element) => {
  //     return element.name.toLowerCase().includes(searchContent.toLowerCase());
  //   });

  //   console.log("after filtering: " + tempProducts);
  //   setProducts(tempProducts);
  // }

  // console.log("categorrrry:" + category);

  // category stuff
  // prev working
  // function handleCategoryChange(categoryName) {
  //   setCategory(categoryName);
  // }

  // not working
  // function handleCategoryChange(e) {
  //   setCategory(e.className);
  //   console.log("e.fawefwa: " + e.className);
  // }

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
            {/* TODO */}
            {/* <li className="is-active"> */}

            {/* this was working */}
            {/* <li className="is-active">
              <button onClick={() => setCategory("all")}>All Categories</button>
            </li> */}
            {/* <li className="">
              <button
                onClick={() => {
                  setCategory("clothing");
                }}
              >
                Clothing
              </button>
            </li>
            <li className="">
              <button onClick={() => setCategory("food")}>Food</button>
            </li>
            <li className="">
              <button onClick={() => setCategory("accessories")}>
                Accessories
              </button>
            </li>
            <li className="">
              <button onClick={() => setCategory("tech")}>Tech</button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
