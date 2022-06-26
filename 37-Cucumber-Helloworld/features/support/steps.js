/* eslint-disable func-names */

/* eslint-disable import/no-extraneous-dependencies */

const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');
const Greeter = require('../../src/Greeter');

When('the greeter says hello', function () {
  this.whatIHeard = new Greeter().sayHello();
});

Then('I should have heard {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
