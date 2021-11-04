const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); //'ejs'탬플릿을 엔진으로 한다.
app.set("views", path.join(__dirname, "views")); //폴더, 폴더경로 지정
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//! 같은 URL , POST 요청
app.post("/test", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/post_next.html");
});
//! 같은 URL , GET 요청
app.get("/test", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/get_next.html");
});

app.post("/sendData", (req, res) => {
  let testId = req.body.testId;
  let testPassword = req.body.testPassword;
  let testNumber = req.body.testNumber;
  console.log(testId);
  res.render("index", {
    title: "예제 홈페이지",
    length: 5,
    testId: testId,
    testPassword: testPassword,
    testNumber: testNumber,
  });
});

app.listen(port, () => {
  console.log("Listening on :" + port);
});
