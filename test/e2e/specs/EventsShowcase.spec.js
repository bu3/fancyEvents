var assert = require('assert');

describe("EventsShowcase", function(){
  it("should bring you to the Hello page when you press the 'Hello' button", function () {
    browser.url("http://localhost:8080/#");
    var helloButton = $("#helloButton");
    helloButton.click();
    var destination = browser.getUrl();
    assert(destination === 'http://localhost:8080/#/hello');
  });

});
