<template>
  <n-button
    size="large"
    block
    v-on:click="toggleIsPlaying()"
    v-bind:pressed="isPlaying"
  >
    {{ isPlaying ? "Pause" : "Play" }}
  </n-button>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { ref } from "vue";

const isPlaying = ref(false);

const toggleIsPlaying = () => {
  console.log("is playing");
  isPlaying.value = !isPlaying.value;
};
</script>
