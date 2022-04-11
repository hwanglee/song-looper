<template>
  <Player
    theme="dark"
    @vmCurrentTimeChange="onTimeChange"
    @vmPausedChange="onPausedChange"
    :current-time="time"
    :paused="!audioStore.isPlaying"
    :playback-rate="audioStore.playbackRate"
  >
    <Audio>
      <source :data-src="props.dataSrc" />
    </Audio>
    <DefaultUi />
  </Player>
</template>

<script setup lang="ts">
import { Player, DefaultUi, Audio } from "@vime/vue-next";
import { ref } from "vue";
import { useAudioStore } from "../stores/audio";

const audioStore = useAudioStore();
const time = ref(0);

const props = defineProps<{
  dataSrc: string;
}>();

const onTimeChange = (event: CustomEvent<number>) => {
  time.value = Number(event);
};

const onPausedChange = (event: CustomEvent<boolean>) => {
  const isPaused = Boolean(event);
  audioStore.setIsPlaying(!isPaused);
};
</script>
