import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import config from '../../config.json';

const get_url = 'http://localhost:' + config.port;

export const dataStore = defineStore('dataStore', () => {
  const title = 'NYT Feed';
  const newspaper = ref([]);
  const errorResponse = ref('no error');
  const defaultError = 'no error';

  function fetchNews() {
    axios.get(get_url)
      .then(
        response => (
          this.newspaper = response.data,
          this.errorResponse = 'no error'
        ),
        error => (
          this.errorResponse = 'There was a problem while fetching the articles from NYT. Try refreshing the page.\n' + error
        )
      );
  };

  return { title, newspaper, errorResponse, defaultError, fetchNews }
});
