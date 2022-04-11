<template>
  <n-button
    :focusable="false"
    size="large"
    block
    @click="toggleIsPlaying()"
    :pressed="audioStore.isPlaying"
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
