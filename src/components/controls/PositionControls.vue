<template>
  <n-space justify="center">
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
  { caption: "Loop Start", seek: 0 },
  { caption: "-5 sec", seek: -5 },
  { caption: "+5 sec", seek: 5 },
];

const audioStore = useAudioStore();

const setSeek = (button: Button) => {
  audioStore.incrementCurrentTime(button.seek);
};
</script>
