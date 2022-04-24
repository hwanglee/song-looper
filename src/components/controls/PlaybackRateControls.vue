<template>
  <n-form-item label="Playback Speed">
    <n-grid cols="3" x-gap="10">
      <n-gi v-for="(btn, index) in buttons" :key="index">
        <n-button
          :focusable="false"
          size="large"
          :key="index"
          :type="btn.state ? 'primary' : 'default'"
          :ghost="btn.state"
          @click="setButton(btn)"
          class="fullwidth"
        >
          {{ btn.speed }}x
        </n-button>
      </n-gi>
    </n-grid>
  </n-form-item>
</template>

<script setup lang="ts">
import { useAudioStore } from "@/stores/audio";
import { NButton, NGrid, NGi, NFormItem } from "naive-ui";
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
