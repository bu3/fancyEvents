<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ apiUrl }}</h2>

       <button id="myButton"
            v-on:click='toggleButtonClicked()'>Click me</button>
       <div id="someText" v-if="buttonWasClicked">On</div>
       <div id="someText" v-else>Off</div>

    <input id="nameInput" v-model="message" placeholder="edit me">
    <h2 id="nameHeader">Hi {{ message }}</h2>
  </div>
</template>

<script>
  /* eslint-disable */

  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Fancy Events',
        message: '',
        buttonWasClicked: false,
        apiUrl: process.env.EVENTS_API
      };
    },
    methods:
      {
        toggleButtonClicked(){
            this.buttonWasClicked = !this.buttonWasClicked;
        }
      }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
