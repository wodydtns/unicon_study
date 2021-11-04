//app.js
var express = require("express");
var path = require("path");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/sendData", function (req, res) {
  let testId = req.body.testId;
  let testPassword = req.body.testPassword;
  let testNumber = req.body.testNumber;
  res.render("views", {
    data: "lee",
    title: "예제 홈페이지",
    length: 5,
    testId: testId,
    testPassword: testPassword,
    testNumber: testNumber,
  });
});

app.listen(3001, function () {
  console.log("hello ejs");
});
