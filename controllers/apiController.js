const axios = require("axios");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

module.exports = { fetchDataFromAPI };
