/* eslint-disable no-undef */
var chai = require("chai");
const expect = chai.expect;

const { getDistricts } = require("../index.js");


describe ("Should fetch url data", function() {

  it("UrlData is called", done => {
    const resolvingPromise = new Promise((resolve, reject) => {
      resolve(getDistricts);
      reject("Failed to retrieve data")
    });    
    resolvingPromise
      .then(result => {
        expect(typeof result).to.equal('object')
        expect(result.length).to.equal(135);
      })
      .catch(error => console.log(error.message, 'here is the error', error))
      .finally(done);
  });

});
