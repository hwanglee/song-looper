<template>
  <n-space :wrap="false">
    <n-form-item label="Loop">
      <n-switch size="large" />
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
import { NSpace, NSwitch, NFormItem } from "naive-ui";
import LoopTimeInput from "../LoopTimeInput.vue";

const onChange = (value: string) => {
  console.log(value);
};
</script>
