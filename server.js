const express = require("express");
const fetchDataAndSaveToCSV = require("./csvFileConver");
const app = express();
const PORT = 3000;

app.listen(PORT, async () => {
  fetchDataAndSaveToCSV();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
