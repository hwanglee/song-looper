<template>
  <n-space justify="center">
    <n-form-item label="Loop">
      <n-switch size="large" />
    </n-form-item>
    <n-form-item label="Start">
      <n-input size="large" default-value="0:00" />
    </n-form-item>
    <n-form-item label="End">
      <n-input size="large" default-value="0:00" />
    </n-form-item>
  </n-space>
</template>

<script setup lang="ts">
import { NSpace, NSwitch, NFormItem, NInput } from "naive-ui";
</script>
