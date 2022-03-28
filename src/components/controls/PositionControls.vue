<template>
  <n-space justify="center">
    <div v-for="(btn, index) in buttons" :key="index">
      <n-button size="large" :key="index" v-on:click="setSeek(btn)">
        {{ btn.caption }}
      </n-button>
    </div>
  </n-space>
</template>

<script setup lang="ts">
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

const setSeek = (button: Button) => {
  console.log(button.seek);
};
</script>
