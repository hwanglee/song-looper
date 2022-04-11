<template>
  <n-space justify="center">
    <n-button :focusable="false" size="large" @click="setStart">
      {{ audioStore.isLooping ? "Loop Start" : "Song Start" }}
    </n-button>
    <div v-for="(btn, index) in buttons" :key="index">
      <n-button
        :focusable="false"
        size="large"
        :key="index"
        @click="setSeek(btn)"
      >
        {{ btn.caption }}
      </n-button>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { useAudioStore } from "@/stores/audio";
import { NButton, NSpace } from "naive-ui";

interface Button {
  caption: string;
  seek: number;
}

const buttons = [
  { caption: "-5 sec", seek: -5 },
  { caption: "+5 sec", seek: 5 },
];

const audioStore = useAudioStore();

const setStart = () => {
  audioStore.setCurrentTime(0);
};

const setSeek = (button: Button) => {
  let newTime = audioStore.currentTime + button.seek;

  if (newTime < 0) {
    newTime = 0;
  }

  audioStore.setCurrentTime(newTime);
};
</script>
