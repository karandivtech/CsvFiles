const fetchDataAndSaveToCSV = require("./csvFileConver");
const fetchData = require("./controllers/apiController");
const csvFunactions = require("./controllers/csvController");

jest.mock("axios");
jest.mock("./controllers/apiController");
jest.mock("./controllers/csvController");

describe("fetchDataAndSaveToCSV", () => {
  test("should fetch data from the API, transform, and save to CSV", async () => {
    // Mock API response data
    const mockApiData = [
      { id: 1, title: "Test Data 1" },
      { id: 2, title: "Test Data 2" },
    ];
    fetchData.fetchDataFromAPI.mockResolvedValue(mockApiData);

    // Mock transformed data
    const mockTransformedData = [
      { id: 1, title: "Test Data 1 - Transformed" },
      { id: 2, title: "Test Data 2 - Transformed" },
    ];
    csvFunactions.transformDataToDifferentDTO.mockReturnValue(
      mockTransformedData
    );

    const mockCSVData =
      "id,title\n1,Test Data 1 - Transformed\n2,Test Data 2 - Transformed";
    csvFunactions.convertToCSV.mockReturnValue(mockCSVData);

    await fetchDataAndSaveToCSV();

    // Assertions
    expect(fetchData.fetchDataFromAPI);
    expect(csvFunactions.transformDataToDifferentDTO).toHaveBeenCalledWith(
      mockApiData
    );
    expect(csvFunactions.convertToCSV).toHaveBeenCalledWith(
      mockTransformedData
    );
    expect(csvFunactions.saveDataToCSV).toHaveBeenCalledWith(mockCSVData);
  });

  test("should handle API error", async () => {
    // Mock API error
    const errorMessage = "API error";
    require("./controllers/apiController").fetchDataFromAPI.mockRejectedValue(
      new Error(errorMessage)
    );

    // Mock console.error to capture the error message
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Call the function to be tested
    await fetchDataAndSaveToCSV();

    // Expectations
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error fetching data:",
      errorMessage
    );

    // Restore the original console.error behavior
    consoleErrorSpy.mockRestore();
  });
});
