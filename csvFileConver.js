const { fetchDataFromAPI } = require("./controllers/apiController");
const {
  convertToCSV,
  saveDataToCSV,
  transformDataToDifferentDTO,
} = require("./controllers/csvController");

const fetchDataAndSaveToCSV = async () => {
  try {
    const apiData = await fetchDataFromAPI();
    const transformedData = transformDataToDifferentDTO(apiData);
    const csvData = convertToCSV(transformedData);
    saveDataToCSV(csvData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

module.exports = fetchDataAndSaveToCSV;
