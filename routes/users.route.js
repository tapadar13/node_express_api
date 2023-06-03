import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hi router");
  res.send("Hello");
});

export default router;
