<script setup>
import { dataStore } from '../data';
import { computed } from 'vue';
import FeedList from '../components/FeedList.vue';

const data = dataStore();
const newspaper = computed(() => data.newspaper);
const errorResponse = computed(() => data.errorResponse);
const buttonMessage = computed(() => (data.newspaper.length || data.errorResponse.length) ? 'Refresh News' : 'Fetch News');
</script>

<template>
  <div class="feed-container">
    <button @click="data.fetchNews" class="fetch-button"><b>{{buttonMessage}}</b></button>
    <FeedList :newspaper="newspaper" :errorResponse="errorResponse"></FeedList>
  </div>
</template>
