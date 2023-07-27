const fs = require("fs");
const Papa = require("papaparse");
const DifferentDTO = require("../dataTransformer");

const CSV_FOLDER = "./csvFiles";

const transformDataToDifferentDTO = (apiData) => {
  return apiData.map((item) => new DifferentDTO(item));
};

const convertToCSV = (data) => {
  return Papa.unparse(data);
};

const saveDataToCSV = (csvData) => {
  let fileName = "";
  const timestamp = new Date()
    .toISOString()
    .replace(/:/g, "-")
    .replace(/\./g, "-");
  if (csvData) {
    fileName = `data_${timestamp}.csv`;
  } else {
    fileName = `blank_${timestamp}.csv`;
  }
  const filePath = `${CSV_FOLDER}/${fileName}`;
  fs.writeFileSync(filePath, csvData);
  console.log("Data saved to CSV file:", filePath);
};

module.exports = {
  convertToCSV,
  saveDataToCSV,
  transformDataToDifferentDTO,
};
