import axios from "axios";

// API for production

export default axios.create({
    baseURL: "https://dry-plains-08452.herokuapp.com/api/v1/restaurants"
})