/* eslint-disable */
const assert = require('assert');

describe('EventShowcase', () => {
  it('should show a list of events', (done) => {

    const expectedEvents = [
      {
        id: 1,
        name: 'Cool party',
        location: 'Dublin',
      },
      {
        id: 2,
        name: 'Boring event',
        location: 'Paris',
      },
    ];

    let mock = {
      getEvents: () => new Promise((resolve, reject) => {
        resolve(expectedEvents);
        done();
      }),
    };

    const EventsShowcaseInjector = require('!!vue-loader?inject!../../../../src/components/events/EventsShowcase.vue');
    const EventsShowcaseWithMocks = EventsShowcaseInjector({
      './EventService': mock,
    });

    assert.equal(EventsShowcaseWithMocks.data().events, expectedEvents);
  });
});
