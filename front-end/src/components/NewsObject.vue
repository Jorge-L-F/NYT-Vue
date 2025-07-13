<script setup>
import {ref, watchEffect} from 'vue';

const props = defineProps({
  news: {
    type: Object,
    required: true
  }
});

const news = ref(props.news);

watchEffect(() => props.news);
</script>

<template>
  <div class="news-object">
    <img v-if="news.multimedia != null || news.multimedia != undefined" :src="news.multimedia[2].url" class="news-image">
    
    <div v-if="news.multimedia == null || news.multimedia == undefined" class="solo-news-details">
      <b class="news-title">{{news.title}}</b><br><br>
      {{news.abstract}}<br><br>
      {{news.byline}}<br><br>
      <a :href="news.url">Source</a>
    </div>
    <div v-else class="news-details">
      <b class="news-title">{{news.title}}</b><br><br>
      {{news.abstract}}<br><br>
      {{news.byline}}<br><br>
      <a :href="news.url">Source</a>
    </div>
  </div>
</template>
