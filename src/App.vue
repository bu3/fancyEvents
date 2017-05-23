<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'app',
    methods: {
      setLang(lang) {
        Vue.http.get(`${Vue.config.apiUrl}/translations?lang=${lang}`).then((res) => {
          this.$i18n.setLocaleMessage(lang, res.body.en);
          this.$i18n.locale = lang;
        });
      },
    },
    created() {
      this.setLang('en-GB');
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
