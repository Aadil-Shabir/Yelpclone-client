import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import RestaurantFinder from "../apis/RestaurantFinder";
import RestaurantContext from "../context/RestaurantContext";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantContext);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
        console.log("response", response);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [id, setSelectedRestaurant]);

  // console.log("Seleced", selectedRestaurant);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning ml-1">
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview reviews={selectedRestaurant.reviews} />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
