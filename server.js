const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const emailRoute = require("./routes/emailRouter");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("working fine");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use("/sendmail", emailRoute);

module.exports = app;
