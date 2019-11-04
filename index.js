const axios = require("axios");
const cherio = require("cherio");
const url =
  "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/Districts_of_Uganda";

let data = [];

let getData = html => {
  //these are the districts that were difficult to track in the DOM.
  let untracked_districts = [
    "Lusot",
    "Karenga",
    "Madi-Okollo",
    "Kitagwenda",
    "Rwampara",
    "Kazo",
    "Obongi"
  ];
  //we make a new array of districts. Here we spread out the untracked districts and append those gotten through dom manipulation
  data = [...untracked_districts];
  //cherio is for dom manipulation
  const $ = cherio.load(html);
  $("table.wikitable tr td a").each((i, elem) => {
    data.push($(elem).text());
  });

  for (let i = 0; i < data.length; i++) {
    if (data[i].includes("\n")) {
      data[i] = data[i].replace("\n", "");
    }
  }
  //sort in alphabetical order
  data.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    return -1;
  });

  //create an array of non-duplicate districts
  data = [...new Set(data)];

  return new Promise((resolve, reject) => {
    resolve(data); // wrap districts in resolve
    reject("Failed to retrieve data"); // failed to get districts
  });
};

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const urlData = async () => {
  await axios
    .get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      json: true
    })
    .then(response => getData(response.data))
    .catch(error => console.log(error));
  return data;
};

module.exports = {
  getDistricts: urlData()
};
