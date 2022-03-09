import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import BasicPagination from "./BasicPagination";
// import Menu from "./menuApi";
import "./menucard.css";
// import { FaSearch } from "react-icons/fa";
const MenuCard = ({ menuData }) => {
  const [noOfElement, setnoOfElement] = useState(3);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  console.log(menuData);
  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? menuData
    : menuData.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
      );
  const slice = filtered.slice(0, noOfElement);
  return (
    <>
      <div class="col-rt-3 equal-height">
        <div class="sb-example-3">
          <div class="search__container">
            <input
              class="search__input"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search"
            />
            {/* <FaSearch className="searchicon" /> */}
            <i className="fa fa-search search-icon" />
          </div>
        </div>
      </div>
      <section className="main-card--cointainer">
        {slice.map((curElem) => {
          const { id, name, category, image, description, price } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>

                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-title-1">{price}</span>
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
      <br></br>
      <Button
        variant="secondary"
        onClick={() => loadMore()}
        className="loadMore"
      >
        Load More
      </Button>
    </>
  );
};

export default MenuCard;
