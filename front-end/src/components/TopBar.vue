<script setup>
import { dataStore } from '../stores/data';
import { computed } from 'vue';
import FeedList from '../components/FeedList.vue';

const data = dataStore();
data.newspaper.value = [];
const buttonMessage = computed(() => (data.newspaper.value.length > 0 || data.errorResponse != data.defaultError) ? 'Refresh News' : 'Fetch News');
</script>

<template>
  <div class="top-bar">
    <button @click="data.fetchNews" class="fetch-button"><b>{{buttonMessage}}</b></button>
    <p v-show="data.errorResponse != data.defaultError" class="error-message">{{data.errorResponse}}</p>
    <FeedList :newspaper="data.newspaper.value"></FeedList>
  </div>
</template>
