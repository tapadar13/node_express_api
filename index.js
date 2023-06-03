import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.route.js";

const app = express();
const PORT = 8000;

// initializing the middleware
app.use(bodyParser.json()); // tells that we are going to be using JSON data in our entire application

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Hi from the homepage"));

app.listen(PORT, () => {
  console.log(`Server is now successfully running on http://localhost:${PORT}`);
});
