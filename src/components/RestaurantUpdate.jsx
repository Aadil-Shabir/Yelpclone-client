import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const RestaurantUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    navigate("/");
    console.log(updatedRestaurant);
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            className="form-control"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            id="price_range"
            className="form-control"
            type="text"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          ></input>
        </div>
        <button
          onClick={submitHandler}
          type="submit"
          className="btn btn-primary"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default RestaurantUpdate;
