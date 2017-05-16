<template>
  <div class="showcase">
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="e in events">{{ e.name }} - {{e.location}}</li>
    </ul>
  </div>
</template>

<script>
  /* eslint-disable */
  import EventService from './EventService';

  export default {
    name: 'eventsShowcase',

    data() {
      let data = {
        title: 'Available Events',
        events: [],
      };

      EventService.getEvents().then((response) => {
        data.events = response.body;
      }, (response) => {
        console.log(response);
      });

      return data;
    },
  };
</script>
