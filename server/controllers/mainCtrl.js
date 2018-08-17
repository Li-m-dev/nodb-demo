const axios = require("axios");

let data = [];

axios
  .get("https://www.swapi.co/api/people")
  .then(response => {
    // console.log(response.data.results);
    data.push(...response.data.results);
  })
  .catch(err => console.log(err));

const getPeople = (req, res, next) => {
  res.status(200).json(data);
};
const addPerson = (req, res, next) => {
  console.log(req.body);
  data.push(req.body);
  console.log("data: ", data);
  res.status(200).send(data);
};

module.exports = {
  getPeople,
  addPerson
};
