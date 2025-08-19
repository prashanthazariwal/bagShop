const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("product Dashboard");
});

module.exports = router;    
// This code defines a route for the product dashboard in an Express application.
// It sets up a GET request handler for the root path of the product routes, which responds with a simple message "product Dashboard". The router is then exported for use in other parts of the application.