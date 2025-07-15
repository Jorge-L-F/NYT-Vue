<script setup>
import {ref, watchEffect} from 'vue';
import NewsObject from '../components/NewsObject.vue';

const props = defineProps({
  newspaper: {
    type: Array,
    required: true
  },
  errorResponse: {
    type: String,
    required: true
  }
});

watchEffect(
  () => props.newspaper
);
watchEffect(
  () => props.errorResponse
);
</script>

<template>
  <div class="scrollable-box">
    <p v-show="!newspaper.length && !errorResponse" class="initial-message">Click the fetch button to fetch the latest news.</p>
    <p v-show="errorResponse" class="error-message">{{errorResponse}}</p>
    <p v-for="news in newspaper" class="news-entry">
      <NewsObject :news="news"></NewsObject>
    </p>
  </div>
</template>
