<template>
  <n-config-provider :theme="theme">
    <div class="fullscreen" :style="background">
      <n-grid :cols="2" x-gap="50">
        <n-gi>
          <FilePicker />
        </n-gi>
        <n-gi>
          <n-space vertical>
            <LoopControls />
            <PositionControls />
            <SpeedControls />
            <PlaybackControls />
          </n-space>
        </n-gi>
      </n-grid>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NGrid, NSpace, NGi, NConfigProvider } from "naive-ui";
import { useOsTheme, darkTheme } from "naive-ui";
import FilePicker from "./components/FilePicker.vue";
import PositionControls from "./components/controls/PositionControls.vue";
import SpeedControls from "./components/controls/SpeedControls.vue";
import PlaybackControls from "./components/controls/PlaybackControls.vue";
import LoopControls from "./components/controls/LoopControls.vue";

const osThemeRef = useOsTheme();
const theme = osThemeRef.value === "dark" ? darkTheme : null;

const background = {
  backgroundColor: osThemeRef.value === "dark" ? "#100c08" : "white",
};
</script>

<style>
.fullscreen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0vh 10vh 0vh 10vh;
}
</style>
