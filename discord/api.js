const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*router.get("/", (req, res) => {
  res.sendFile("index.html");
});*/

app.post("/cweb/contactus", (req, res) => {
  const obj = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    discord: req.body.Discord,
  };
  console.log(obj);
  res.end("Data received");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
