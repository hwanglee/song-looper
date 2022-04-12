import { defineStore } from "pinia";

export const useAudioStore = defineStore({
  id: "audio",
  state: () => ({
    isPlaying: false,
    currentTime: 0,
    playbackRate: 1,
    isLooping: false,
    loopStart: 0,
    loopEnd: 0,
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
    setLoopStart(time: number) {
      this.loopStart = time;
      console.log(`set loop start: ${this.loopStart}`);

      if (this.loopStart >= this.loopEnd) {
        this.isLooping = false;
      }
    },
    setLoopEnd(time: number) {
      this.loopEnd = time;
      console.log(`set loop end: ${this.loopEnd}`);

      if (this.loopStart >= this.loopEnd) {
        this.isLooping = false;
      }
    },
  },
});
