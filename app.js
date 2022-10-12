const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
app.use("/", router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*router.get("/", (req, res) => {
  res.sendFile("index.html");
});*/

app.post("/cweb/contactus", (req, res) => {
  const obj = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  console.log(obj);
  res.end("Data received");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
