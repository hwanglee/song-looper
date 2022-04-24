<template>
  <n-button :focusable="false" size="large" @click="clickInput">
    Browse
  </n-button>
  <input
    type="file"
    id="song"
    name="song"
    accept="mp3"
    ref="input"
    @change="onChange"
    style="display: none"
  />
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { ref } from "vue";

const emit = defineEmits<{
  (e: "file-change", file: File): void;
}>();

const input = ref<HTMLElement | undefined>(undefined);

const clickInput = () => {
  input.value?.click();
};

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = (target.files as FileList)[0];

  emit("file-change", file);
};
</script>
