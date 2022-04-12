<template>
  <Player
    theme="dark"
    @vm-current-time-change="onTimeChange"
    @vm-paused-change="onPausedChange"
    :current-time="audioStore.currentTime"
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
import { watch } from "vue";
import { useAudioStore } from "../stores/audio";

const audioStore = useAudioStore();

const props = defineProps<{
  dataSrc: string;
}>();

watch(
  () => props.dataSrc,
  (selection, prevSelection) => {
    audioStore.setIsPlaying(false);
    audioStore.setCurrentTime(0);
  }
);

const onTimeChange = (event: CustomEvent<number>) => {
  const time = Number(event);

  audioStore.setCurrentTime(time);

  if (
    audioStore.isLooping &&
    (time >= audioStore.loopEnd || time < audioStore.loopStart)
  ) {
    // FIXME: find better solution than using timeout
    setTimeout(() => {
      audioStore.setCurrentTime(audioStore.loopStart);
    }, 100);
  }
};

const onPausedChange = (event: CustomEvent<boolean>) => {
  const isPaused = Boolean(event);
  audioStore.setIsPlaying(!isPaused);
};
</script>
