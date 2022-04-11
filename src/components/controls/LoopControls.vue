<template>
  <n-space :wrap="false">
    <n-form-item label="Loop">
      <n-switch size="large" @update-value="onSwitchUpdate" />
    </n-form-item>
    <n-space />
    <n-form-item label="Start">
      <loop-time-input @change="onChange" />
    </n-form-item>
    <n-form-item label="End">
      <loop-time-input @change="onChange" />
    </n-form-item>
  </n-space>
</template>

<script setup lang="ts">
import { useAudioStore } from "@/stores/audio";
import { NSpace, NSwitch, NFormItem } from "naive-ui";
import LoopTimeInput from "../LoopTimeInput.vue";

const audioStore = useAudioStore();

const onChange = (value: string) => {
  console.log(value);
};

const onSwitchUpdate = (value: boolean) => {
  audioStore.setIsLooping(value);
};
</script>
