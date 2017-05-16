import Vue from 'vue';

const EventService = {
  getEvents: () => Vue.http.get(`${Vue.config.apiUrl}/events`),
};

export default EventService;
