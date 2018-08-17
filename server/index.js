const express = require("express");
//express to node = react to JS
const { json } = require("body-parser");
const cors = require("cors");

const { getPeople, addPerson } = require(`./controllers/mainCtrl`);

const port = 3001;

const app = express();
app.use(cors());
app.use(json());

// app.get("/api/test", (req, res, next) => {
//   res.status(200).send("Success");
// });

app.get("/api/people", getPeople);
app.post("/api/people", addPerson);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
