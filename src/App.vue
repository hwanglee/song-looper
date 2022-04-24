<template>
  <n-config-provider :theme="theme">
    <div class="fullscreen" :style="background">
      <div class="container">
        <div class="content">
          <FilePicker />
        </div>
        <div class="content">
          <n-space vertical>
            <LoopControls />
            <PositionControls />
            <PlaybackRateControls />
            <PlaybackControls />
          </n-space>
        </div>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NSpace, NConfigProvider } from "naive-ui";
import { useOsTheme, darkTheme } from "naive-ui";
import FilePicker from "./components/FilePicker.vue";
import PositionControls from "./components/controls/PositionControls.vue";
import PlaybackRateControls from "./components/controls/PlaybackRateControls.vue";
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
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 10vh;
  column-gap: 5vw;
  margin: 0 20px 0 20px;
  min-width: 0;
}

.content {
  width: 550px;
}

.fullwidth {
  width: 100%;
}
</style>
