const axios = require("axios");
const cherio = require("cherio");

const url = "https://en.wikipedia.org/wiki/Districts_of_Uganda";

let getData = html => {
  let data = [];
  const $ = cherio.load(html);
  $("table.wikitable tr td:nth-child(2)").each((i, elem) => {
    data.push($(elem).text());
  });

  return new Promise((resolve, reject) => {
    resolve(data); // wrap districts in resolve
    reject("Failed to retrieve data"); // failed to get districts
  });
};

const urlData = () => {
  return axios
    .get(url)
    .then(response => getData(response.data))
    .catch(error => console.log(error));
};

module.exports = {
  path: urlData()
};
