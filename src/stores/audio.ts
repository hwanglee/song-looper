import { defineStore } from "pinia";

export const useAudioStore = defineStore({
  id: "audio",
  state: () => ({
    isPlaying: false,
    currentTime: 0,
    playbackRate: 1,
    isLooping: false,
  }),
  getters: {},
  actions: {
    setIsPlaying(isPlaying: boolean) {
      this.isPlaying = isPlaying;
    },
    setPlaybackRate(rate: number) {
      this.playbackRate = rate;
    },
    setCurrentTime(time: number) {
      this.currentTime = time;
    },
    setIsLooping(isLooping: boolean) {
      this.isLooping = isLooping;
    },
  },
});
