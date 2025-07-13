<script setup>
import {ref, watchEffect} from 'vue';
import NewsObject from '../components/NewsObject.vue';

const props = defineProps({
  newspaper: {
    type: Array,
    required: true
  }
});

watchEffect(
  () => props.newspaper
);
</script>

<template>
  <div class="scrollable-box">
    <p v-show="!newspaper.length">Click the fetch button to fetch the latest news.</p>
    <p v-for="news in newspaper">
      <NewsObject :news="news"></NewsObject>
    </p>
  </div>
</template>
