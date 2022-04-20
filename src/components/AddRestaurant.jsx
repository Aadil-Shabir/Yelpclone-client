import React, { useState, useContext } from "react";

import classes from "./AddRestaurant.module.css";
import RestaurantFinder from "../apis/RestaurantFinder";
import RestaurantContext from "../context/RestaurantContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response);
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <div className="mb-4">
    //   <form action="">
    //     <div className="row">
    //       <div className="col">
    //         <input type="text" className="form-control" placeholder="name" />
    //       </div>
    //       <div className="col">
    //         <input
    //           type="text"
    //           className="form-control"
    //           placeholder="location"
    //         />
    //       </div>
    //       <div className="col">
    //         <select className="custom-select my-1 mr-sm-2">
    //           <option disabled>Price Range</option>
    //           <option value="1">$</option>
    //           <option value="2">$$</option>
    //           <option value="3">$$$</option>
    //           <option value="4">$$$$</option>
    //           <option value="5">$$$$$</option>
    //         </select>
    //       </div>
    //       <button className="btn btn-primary">Add</button>
    //     </div>
    //   </form>
    // </div>
    <div className={classes.container}>
      <form action="">
        <div className="row">
          <div className={classes.itemsContainer}>
            <div style={{ marginRight: "1rem" }}>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ marginRight: "1rem" }}>
              <input
                type="text"
                className="form-control"
                placeholder="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div style={{ marginRight: "1rem" }}>
              <select
                className="form-select my-1 mr-sm-2"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option disabled>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
            </div>
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
