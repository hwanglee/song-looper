import { useAudioStore } from "../audio";
import { createPinia, setActivePinia } from "pinia";
import "ts-jest";

describe("Audio Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("set is playing", () => {
    const audioStore = useAudioStore();
    expect(audioStore.isPlaying).toBe(false);
    audioStore.setIsPlaying(true);
    expect(audioStore.isPlaying).toBe(true);
  });

  test("set current time", () => {
    const audioStore = useAudioStore();
    expect(audioStore.currentTime).toBe(0);
    audioStore.setCurrentTime(10);
    expect(audioStore.currentTime).toBe(10);
  });

  test("set playback rate", () => {
    const audioStore = useAudioStore();
    expect(audioStore.playbackRate).toBe(1);
    audioStore.setPlaybackRate(0.5);
    expect(audioStore.playbackRate).toBe(0.5);
  });

  test("set loop", () => {
    const audioStore = useAudioStore();
    expect(audioStore.isLooping).toBe(false);
    audioStore.setIsLooping(true);
    expect(audioStore.isLooping).toBe(true);
  });

  test("set loop start", () => {
    const audioStore = useAudioStore();
    expect(audioStore.loopStart).toBe(0);
    audioStore.setLoopStart(10);
    expect(audioStore.loopStart).toBe(10);
  });

  test("set loop end", () => {
    const audioStore = useAudioStore();
    expect(audioStore.loopEnd).toBe(0);
    audioStore.setLoopEnd(10);
    expect(audioStore.loopEnd).toBe(10);
  });
});
