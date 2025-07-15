<script setup>
import {ref, watchEffect} from 'vue';

const props = defineProps({
  news: {
    type: Object,
    required: true
  }
});

watchEffect(() => props.news);
</script>

<template>
  <div class="news-object">
    <img v-if="news.multimedia != null || news.multimedia != undefined" :src="news.multimedia[2].url" class="news-image">
    
    <div v-if="news.multimedia == null || news.multimedia == undefined" class="solo-news-details">
      <p class="news-title"><b>{{news.title}}</b></p>
      <p class="news-text news-abstract">{{news.abstract}}</p>
      <p class="news-text">{{news.byline}}</p>
      <p class="news-text"><a :href="news.url">Source</a></p>
    </div>
    <div v-else class="news-details">
      <p class="news-title"><b>{{news.title}}</b></p>
      <p class="news-text news-abstract">{{news.abstract}}</p>
      <p class="news-text">{{news.byline}}</p>
      <p class="news-text"><a :href="news.url">Source</a></p>
    </div>
  </div>
</template>
