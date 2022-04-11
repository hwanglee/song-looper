<template>
  <n-input-group>
    <n-input
      size="large"
      :value="inputValue"
      @change="onChange"
      @input="onInput"
    />
    <n-button :focusable="false" size="large">Now</n-button>
  </n-input-group>
</template>

<script setup lang="ts">
import { NButton, NInput, NInputGroup } from "naive-ui";
import { ref } from "vue";

const defaultTime = "0:00";
const inputValue = ref(defaultTime);
const currentTime = ref(defaultTime);
const prevTime = ref(defaultTime);

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const onInput = (value: string) => {
  inputValue.value = value;
};

const onChange = (value: string) => {
  const formatted = value.formatAsTime();
  prevTime.value = currentTime.value;
  currentTime.value = formatted ?? prevTime.value;
  inputValue.value = currentTime.value;
  emit("change", inputValue.value);
};
</script>
