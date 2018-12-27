const express = require("express");
const app = express();
const port = 5000;

const surveys = require("./data/index.json");
const survey1 = require("./data/1.json");
const survey2 = require("./data/2.json");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  const response = () => res.json(surveys);
  setTimeout(response, Math.random() * 2000); // << Mock wait times from external api
});

app.get("/survey/:id", (req, res) => {
  try {
    let survey = require(`./data/${req.params.id}`);
    const response = () => res.json(survey);
    setTimeout(response, Math.random() * 2000); // << Mock wait times from external api
  } catch (err) {
    res.json({
      error: "sorry, no such survey exists"
    });
  }
});

app.listen(port, () => console.log(`Running on port ${port}`));
