import axios from "axios"

export const api = axios.create({
  baseURL: "https://hardware-price-tracker-api.onrender.com",
})
