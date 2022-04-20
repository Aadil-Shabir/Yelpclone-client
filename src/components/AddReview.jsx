import React, { useState } from "react";

import RestaurantFinder from "../apis/RestaurantFinder";
import { useParams, Navigate, useLocation } from "react-router-dom";

const AddReview = ({ reviews }) => {
  const { id } = useParams();
  const navigate = Navigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("Rating");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review,
        rating,
      });

      console.log(response);
      // window.location.reload();
      navigate("/");
      navigate(location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="form-select my-1 mr-sm-2"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mt-2"
          type="submit"
          onClick={submitHandler}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddReview;
