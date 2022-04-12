<template>
  <n-input-group>
    <n-input
      size="large"
      :value="inputValue"
      @change="onChange"
      @input="onInput"
    />
    <n-button :focusable="false" size="large" @click="onClick">Now</n-button>
  </n-input-group>
</template>

<script setup lang="ts">
import { useAudioStore } from "@/stores/audio";
import { NButton, NInput, NInputGroup } from "naive-ui";
import { ref } from "vue";

const defaultTime = "0:00";
// var that is binded to input
const inputValue = ref(defaultTime);
// stores the last formatted time
const currentTime = ref(defaultTime);

const audioStore = useAudioStore();

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const onInput = (value: string) => {
  inputValue.value = value;
};

const onChange = (value: string) => {
  const formatted = value.formatAsTime();

  // update if value can be formatted as time
  if (formatted) {
    currentTime.value = formatted;
  }

  inputValue.value = currentTime.value;
  emit("change", inputValue.value);
};

const onClick = (event: Event) => {
  currentTime.value =
    audioStore.currentTime.toString().formatAsTime() ?? inputValue.value;
  inputValue.value = currentTime.value;

  emit("change", inputValue.value);
};
</script>
