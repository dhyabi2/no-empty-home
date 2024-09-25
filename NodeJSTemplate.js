const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 443;

// Enable CORS for all origins
app.use(cors({ origin: "*", credentials: true }));

// Increase the limit for the JSON bodies
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Define helper function here to ensure it's available throughout the script
const getTodayDate = () => new Date().toISOString().split("T")[0];

// File paths
const carsFilePath = path.join(__dirname, "cars.json");

// Function to ensure JSON files exist with default content
const ensureFileExists = (filePath, defaultData) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
  }
};

// Ensure all necessary JSON files exist
ensureFileExists(carsFilePath, []);

// Function to read data from a file
const readData = (filePath, defaultData = []) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return defaultData;
  }
};

// Function to write data to a file
const writeData = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Submit feedback
app.post("/api/submit-feedback", (req, res) => {
  const { feedback, language } = req.body;

  if (!feedback || !language) {
    return res
      .status(400)
      .json({ error: "Feedback and language are required" });
  }

  const feedbackData = JSON.parse(fs.readFileSync(FEEDBACK_FILE, "utf8"));

  feedbackData.push({
    feedback,
    language,
    timestamp: new Date().toISOString(),
  });

  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(feedbackData, null, 2));

  res.json({ success: true, message: "Feedback submitted successfully" });
});

app.get("/api/cars", (req, res) => {
  const cars = readData(carsFilePath, []);
  res.json(cars);
});

// Create HTTP server
app.listen(port, "0.0.0.0", () => {
  console.log(`API server running on port ${port}`);
});
