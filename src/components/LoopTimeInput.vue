<template>
  <n-input-group>
    <n-input
      size="large"
      default-value="0:00"
      @change="(value) => $emit('change', value)"
    />
    <n-button :focusable="false" size="large">Now</n-button>
  </n-input-group>
</template>

<script setup lang="ts">
import { NButton, NInput, NInputGroup } from "naive-ui";

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();
</script>
