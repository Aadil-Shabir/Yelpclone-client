import React, { useState, createContext } from "react";

const RestaurantContext = createContext({});

export const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  const addReviews = (review) => {
     restaurants.reviews.push(review)
    console.log(restaurants, "Restaurants")
    // restaurants[objIndex].reviews.push(review)
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        addReviews,
        setSelectedRestaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;
