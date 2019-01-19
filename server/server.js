var express = require("express");
var app = express();
const http = require("http");

const server = http.createServer(app);
const eventCtrl = require("./controllers/event-controller");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

// // route to grab documents
// app.get("/docs", eventCtrl.getDocs, eventCtrl.getSections, (req, res) => {
//   // console.log(res.locals.data, res.locals.sections, res.locals.articles);
//   let fullDocument = {};
// });

app.get("/doc", eventCtrl.getAllMatch, (req, res) => {
  res.json(res.locals.data);
});

// route to sign up
app.post("/signup", eventCtrl.signUp, (req, res) => {
  res.sendStatus(200);
  console.log("user signed in");
});

// route to login
app.post("/login", eventCtrl.verifyUser, (req, res) => {
  console.log(res.locals.user);
  res.json(res.locals.user);
});

// route to post documents
app.post("/docs", eventCtrl.postDoc, (req, res) => {
  console.log("doc submitted");
});

// route to post sections
app.post("sections", eventCtrl.postSection, (req, res) => {
  console.log("section submitted");
});

// route to post articles
// route to edit articles

server.listen(3300, function () {
  console.log("listening on port 3300");
}); //listens on port 3300 -> http://localhost:3300/
