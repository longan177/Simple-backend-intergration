const express = require("express");
const uuid = require("uuid");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({}));
const gameID = () => uuid.v4().slice(-6);
let listGAME = 0;

app.get("/api/gameID", (req, res) => {
  listGAME++;
  const ID = gameID().toUpperCase();
  res.status(200).json({
    status: "ok!",
    gameID: ID,
    currentGame: listGAME,
  });
});

app.use((req, res, next) => {
  req.attack = getRandomWithExclude(1, 10, req.body.arry);
  next();
});
app.post("/api/gameID", (req, res) => {
  res.status(200).json({
    status: "ok",
    attack: req.attack,
  });
});

app.listen(5000, () => {
  console.log("listening to port 5000..");
});

function getRandomWithExclude(min, max, excludeArray) {
  const randomNumber =
    Math.floor(Math.random() * (max - min + 1 - excludeArray.length)) + min;
  return (
    randomNumber +
    excludeArray
      .sort((a, b) => a - b)
      .reduce((acc, element) => {
        return randomNumber >= element - acc ? acc + 1 : acc;
      }, 0)
  );
}
