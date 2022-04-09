<template>
  <Player theme="dark" @vmCurrentTimeChange="onTimeChange" :current-time="time">
    <Audio>
      <source :data-src="props.dataSrc" />
    </Audio>
    <DefaultUi />
  </Player>
</template>

<script setup lang="ts">
import { Player, DefaultUi, Audio } from "@vime/vue-next";
import { ref } from "vue";

const time = ref(0);

const props = defineProps<{
  dataSrc: string;
}>();

const onTimeChange = (event: CustomEvent<number>) => {
  time.value = Number(event);
  console.log(time.value);
};
</script>
