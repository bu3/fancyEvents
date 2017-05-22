var assert = require('assert');

xdescribe('Index page ', function() {

  it(
    "should toggle the on/off state when the 'Click me' button is pressed",
    function () {
    browser.url('http://localhost:8080/#/hello');
    var myButton = $('#myButton');
    var text = browser.getText('#someText');
    assert(text === 'Off');
    browser.click('#myButton');
    text = browser.getText('#someText');
    assert(text === 'On');
  });

  it("should update the name heading when the text in the name field changes",
    function () {
      browser.url('http://localhost:8080/#/hello');
      var headingText = browser.getText('#nameHeader');
      assert(headingText === 'Hi');
      var nameInput = $('#nameInput');
      nameInput.setValue('Suzanne');
      headingText = browser.getText('#nameHeader');
      assert(headingText === 'Hi Suzanne');
    });
});



