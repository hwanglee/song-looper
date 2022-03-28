<template>
  <n-space justify="center">
    <n-form-item label="Loop">
      <n-switch size="large" />
    </n-form-item>
    <n-form-item label="Start">
      <n-input-group>
        <n-input size="large" default-value="0:00" />
        <n-button :focusable="false" size="large">Now</n-button>
      </n-input-group>
    </n-form-item>
    <n-form-item label="End">
      <n-input-group>
        <n-input size="large" default-value="0:00" />
        <n-button :focusable="false" size="large">Now</n-button>
      </n-input-group>
    </n-form-item>
  </n-space>
</template>

<script setup lang="ts">
import {
  NSpace,
  NSwitch,
  NFormItem,
  NButton,
  NInput,
  NInputGroup,
} from "naive-ui";
</script>
