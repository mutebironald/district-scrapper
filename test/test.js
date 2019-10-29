/* eslint-disable no-undef */
var chai = require("chai");
const expect = chai.expect;

const { path } = require("../api/index.js");


describe ("Should fetch url data", function() {

  it("UrlData is called", done => {
    console.log(path, 'path')
    const resolvingPromise = new Promise((resolve, reject) => {
      resolve(path);
      reject("Failed to retrieve data")
    });
    resolvingPromise
      .then(result => {
        expect(result).to.equal(new Array(135));
      })
      .catch(error => console.log(error.message))
      .finally(done);
  });

});
