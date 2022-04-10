import { defineStore } from "pinia";

export const useAudioStore = defineStore({
  id: "audio",
  state: () => ({
    isPlaying: false,
    currentTime: 0,
    isLooping: false,
  }),
  getters: {},
  actions: {
    setIsPlaying(isPlaying: boolean) {
      this.isPlaying = isPlaying;
    },
    incrementCurrentTime(time: number) {
      this.currentTime += time;

      if (this.currentTime < 0) {
        this.currentTime = 0;
      }
    },
  },
});
