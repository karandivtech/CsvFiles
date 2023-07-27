# CsvFiles

Fetch data from the API specified by API_URL.
Transform the API data into a different DTO format based on the transformDataToDifferentDTO function.
Convert the transformed data to CSV format using PapaParse.
Save the CSV data to a file in the ./csvFiles directory with a timestamp in the filename.

Output
The script will create a CSV file in the ./csvFiles directory with a filename in the format data_YYYY-MM-DD_HH-mm-ss.csv, where YYYY-MM-DD is the date and HH-mm-ss is the time the script was run.
