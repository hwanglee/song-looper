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
      console.log(`set is playing: ${this.isPlaying}`);
    },
    setPlaybackRate(rate: number) {
      this.playbackRate = rate;
      console.log(`set playback rate: ${this.playbackRate}`);
    },
    setCurrentTime(time: number) {
      this.currentTime = time;
      console.log(`set current time: ${this.currentTime}`);
    },
    setIsLooping(isLooping: boolean) {
      this.isLooping = isLooping;
      console.log(`set is looping: ${this.isLooping}`);
    },
  },
});
