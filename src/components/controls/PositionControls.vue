<template>
  <n-form-item label="Position">
    <n-grid cols="3" x-gap="10">
      <n-gi>
        <n-button
          :focusable="false"
          size="large"
          @click="setStart"
          class="fullwidth"
        >
          {{ audioStore.isLooping ? "Loop Start" : "Song Start" }}
        </n-button>
      </n-gi>
      <n-gi v-for="(btn, index) in buttons" :key="index">
        <n-button
          :focusable="false"
          size="large"
          :key="index"
          @click="setSeek(btn)"
          class="fullwidth"
        >
          {{ btn.caption }}
        </n-button>
      </n-gi>
    </n-grid>
  </n-form-item>
</template>

<script setup lang="ts">
import { useAudioStore } from "@/stores/audio";
import { NButton, NGrid, NGi, NFormItem } from "naive-ui";

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
