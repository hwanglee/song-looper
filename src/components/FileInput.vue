<template>
  <n-form-item label="Select File">
    <n-button size="large" @click="test">Browse</n-button>
  </n-form-item>
  <input
    type="file"
    id="song"
    name="song"
    accept="mp3"
    ref="input"
    @change="props.change"
    style="display: none"
  />
</template>

<script setup lang="ts">
import { NButton, NFormItem } from "naive-ui";
import { ref } from "vue";

const props = defineProps<{
  change: (event: Event) => void;
}>();

const input = ref<HTMLElement | undefined>(undefined);

const test = () => {
  input.value?.click();
};
</script>
