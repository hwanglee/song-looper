<template>
  <n-button
    :focusable="false"
    size="large"
    block
    v-on:click="toggleIsPlaying()"
    v-bind:pressed="audioStore.isPlaying"
  >
    {{ audioStore.isPlaying ? "Pause" : "Play" }}
  </n-button>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { useAudioStore } from "../../stores/audio";

const audioStore = useAudioStore();

const toggleIsPlaying = () => {
  const isPlaying = audioStore.isPlaying;
  audioStore.setIsPlaying(!isPlaying);
};
</script>
