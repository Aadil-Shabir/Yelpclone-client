import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import UpdateRestaurant from "./pages/UpdateRestaurant";


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restaurant/:id" element={<RestaurantDetailPage />} />
          <Route exact path="/restaurant/:id/update" element={<UpdateRestaurant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
