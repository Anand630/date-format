const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  const fullDate = new Date();
  //dateNumber
  let dayNumber = fullDate.getDate().toString();
  if (dayNumber.length === 1) {
    dayNumber = "0" + dayNumber;
  }
  //monthNumber
  let monthNumber = (fullDate.getMonth() + 1).toString();
  if (monthNumber.length === 1) {
    monthNumber = "0" + monthNumber;
  }
  //yearNumber
  let yearNumber = fullDate.getFullYear();

  const formattedDate = `${dayNumber} - ${monthNumber} - ${yearNumber}`;
  resp.send(formattedDate);
});

app.listen(3000);

module.exports = app;
