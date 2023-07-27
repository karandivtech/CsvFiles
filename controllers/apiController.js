const axios = require("axios");
require("dotenv").config();

const API_URL = process.env.API_BASE_URL;

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

module.exports = { fetchDataFromAPI };
