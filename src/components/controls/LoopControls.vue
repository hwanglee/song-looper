<template>
  <n-space :wrap="false">
    <n-form-item label="Loop">
      <n-switch
        size="large"
        :value="audioStore.isLooping"
        @update-value="onSwitchUpdate"
        :disabled="isSwitchDisabled"
      />
    </n-form-item>
    <n-space />
    <n-form-item label="Start">
      <loop-time-input @change="onStartChange" />
    </n-form-item>
    <n-form-item label="End">
      <loop-time-input @change="onEndChange" />
    </n-form-item>
  </n-space>
</template>

<script setup lang="ts">
import { useAudioStore } from "@/stores/audio";
import { NSpace, NSwitch, NFormItem } from "naive-ui";
import { ref } from "vue";
import LoopTimeInput from "../LoopTimeInput.vue";

const audioStore = useAudioStore();
const isSwitchDisabled = ref(true);

audioStore.$subscribe((mutation, state) => {
  if (state.loopStart >= state.loopEnd) {
    isSwitchDisabled.value = true;
  } else {
    isSwitchDisabled.value = false;
  }
});

const onStartChange = (value: string) => {
  const seconds = value.convertToSeconds();
  if (seconds) {
    audioStore.setLoopStart(seconds);
  }
};

const onEndChange = (value: string) => {
  const seconds = value.convertToSeconds();
  if (seconds) {
    audioStore.setLoopEnd(seconds);
  }
};

const onSwitchUpdate = (value: boolean) => {
  audioStore.setIsLooping(value);

  if (value) {
    audioStore.setCurrentTime(audioStore.loopStart);
  }
};
</script>
