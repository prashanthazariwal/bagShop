const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("user Dashboard");
});

module.exports = router;    
// This code defines a route for the user dashboard in an Express application.