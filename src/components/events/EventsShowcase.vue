<template>
  <div class="showcase">
    <h1>{{ title }}</h1>
    <h2 v-if="selectedEvent">{{selectedEvent.name}}</h2>
    <ul>
      <li v-for="e in events">
        {{ e.name }} - {{e.location}} - {{e.id}}
        <button v-on:click='selectEvent(e.id)'>
          {{ $t("select") }}
        </button>
      </li>
    </ul>

    <button v-on:click='goToHello()' id="helloButton">Hello</button>

  </div>
</template>

<script>
  import EventService from './EventService';

  export default {
    name: 'eventsShowcase',

    data() {
      return {
        title: 'Available Events',
        events: [],
        selectedEvent: null,
      };
    },
    methods: {
      loadEvents() {
        EventService.getEvents().then((response) => {
          this.events = response.body;
        }, () => {
        });
      },

      goToHello() {
        this.$router.push('/hello');
      },

      selectEvent(id) {
        this.selectedEvent = this.events[id - 1];
      },
    },
    created() {
      this.loadEvents();
    },
  };
</script>
