import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

// initializing the middleware
app.use(bodyParser.json()); // tells that we are going to be using JSON data in our entire application

app.listen(PORT, () => {
  console.log(`Server is now successfully running on http://localhost:${PORT}`);
});
