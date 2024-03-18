const express = require("express");
const app = express();

// req is short for request
// res is short for response
app.get("/api",(req, res) => {
  res.json(jsonData);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


const jsonData = {
  nombres: ['Juan', 'María', 'Pedro']
};