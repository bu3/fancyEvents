/* eslint-disable */
import assert from 'assert';
import Vue from 'vue';

describe('EventShowcase', () => {

  const expectedEvents =
    {
      body: [
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
      ]
    };

  it('should show a list of events', (done) => {

    const EventsShowcaseWithMocks = setUpEventsShowcaseComponentWithEvents();

    const vm = new Vue(EventsShowcaseWithMocks).$mount();

    requestAnimationFrame(function () {
      assert.deepEqual(vm.events, expectedEvents.body);
      done();
    });
  });

  it('it should show event details on click', function (done) {

    const EventsShowcaseWithMocks = setUpEventsShowcaseComponentWithEvents();

    const vm = new Vue(EventsShowcaseWithMocks).$mount();

    requestAnimationFrame(function () {
      vm.selectEvent(1);

      assert.notEqual(vm.selectedEvent, null);
      assert.equal(vm.selectedEvent.id, 1);

      assert.equal(vm.selectedEvent.name, 'Cool party');
      assert.equal(vm.selectedEvent.location, 'Dublin');

      done();
    });
  });

  it('it should redirect to the hello view when the Hello button is clicked', function () {
    const EventsShowcaseWithMocks = setUpEventsShowcaseComponentWithEvents();
    const vm = new Vue(EventsShowcaseWithMocks).$mount();




  });


  function setUpEventsShowcaseComponentWithEvents() {
    let mock = {
      getEvents: () => {
        return Promise.resolve(expectedEvents);
      },
    };

    const EventsShowcase = require('!!vue-loader?inject!../../../../src/components/events/EventsShowcase.vue');
    const EventsShowcaseWithMocks = EventsShowcase({
      './EventService': mock,
    });
    return EventsShowcaseWithMocks;
  }

});
