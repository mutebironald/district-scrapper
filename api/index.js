const axios = require("axios");
const cherio = require("cherio");

const url = "https://en.wikipedia.org/wiki/Districts_of_Uganda";

let getData = html => {
  let data = [];
  const $ = cherio.load(html);
  $("table.wikitable tr td:nth-child(2)").each((i, elem) => {
    data.push($(elem).text());
  });
  console.log({ districts: data }, 'here');
  return {
    districts: data
  };
};

function urlData() {
  axios
    .get(url)
    .then(response => {
        getData(response.data)
    })
    .catch(error => console.log(error));
}
urlData()
