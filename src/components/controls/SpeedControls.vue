<template>
  <n-space justify="center">
    <div v-for="(btn, index) in buttons" :key="index">
      <n-button
        :focusable="false"
        size="large"
        :key="index"
        :pressed="btn.state"
        v-on:click="setButton(btn)"
      >
        {{ btn.speed }}x
      </n-button>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { NButton, NSpace } from "naive-ui";

interface Button {
  speed: number;
  state: boolean;
}

const buttons: Button[] = [
  { speed: 0.5, state: false },
  { speed: 0.75, state: false },
  { speed: 1, state: true },
];

const setButton = (button: Button) => {
  buttons.forEach((btn) => {
    btn.state = btn == button;
  });
};
</script>
