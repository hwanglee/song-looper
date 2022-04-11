<template>
  <n-space justify="center">
    <div v-for="(btn, index) in buttons" :key="index">
      <n-button
        :focusable="false"
        size="large"
        :key="index"
        :type="btn.state ? 'primary' : 'default'"
        :ghost="btn.state"
        @click="setButton(btn)"
      >
        {{ btn.speed }}x
      </n-button>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { useAudioStore } from "@/stores/audio";
import { NButton, NSpace } from "naive-ui";
import { ref } from "vue";

interface Button {
  speed: number;
  state: boolean;
}

const audioStore = useAudioStore();
const buttons = ref([
  { speed: 0.5, state: false },
  { speed: 0.75, state: false },
  { speed: 1, state: true },
]);

const setButton = (button: Button) => {
  buttons.value.forEach((btn) => {
    btn.state = btn == button;
  });

  audioStore.setPlaybackRate(button.speed);
};
</script>
