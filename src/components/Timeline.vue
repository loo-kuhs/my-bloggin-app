<script setup lang="ts">
import { ref } from "vue";
import { Post, today, thisWeek, thisMonth } from "../posts";
import { DateTime } from "luxon";

const periods = ["Today", "This week", "This month"] as const;

type Period = typeof periods[number];

const selectedPeriod = ref<Period>("Today");

function selectPeriod(period: Period) {
  console.log(period);
  selectedPeriod.value = period;
}

const posts = [today, thisWeek, thisMonth].map((post) => {
  return {
    ...post,
    created: DateTime.fromISO(post.created),
  };
});
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period of periods"
        :key="period"
        :class="{ 'is-active': period === selectedPeriod }"
        @click="selectPeriod(period)"
      >
        {{ period }}
      </a>
    </span>

    <a v-for="post of posts" :key="post.id" class="panel-block">
      <a>{{ post.title }}</a>
      <div>{{ post.created.toFormat("MMM d") }}</div>
    </a>
  </nav>
</template>
