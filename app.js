const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  var date = addDays(new Date(), 100);
  dateFormat =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  response.send(dateFormat);
});

app.listen(3000);
module.exports = app;
