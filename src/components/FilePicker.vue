<template>
  <n-space justify="space-around" size="large" vertical id="filepicker">
    <n-h1>{{ songTitle }}</n-h1>
    <n-space>
      <FileInput :change="localFileHandler" />
      <n-form-item label="URL">
        <n-input-group>
          <n-input
            size="large"
            placeholder="Song file URL"
            v-model:value="remoteUrl"
            type="text"
          />
          <n-button size="large" :onclick="remoteFileHandler">Submit</n-button>
        </n-input-group>
      </n-form-item>
    </n-space>
    <Player theme="dark">
      <Audio>
        <source :data-src="src" src="" />
      </Audio>
      <DefaultUi />
    </Player>
  </n-space>
</template>

<script setup lang="ts">
import { NSpace, NH1, NFormItem, NButton, NInput, NInputGroup } from "naive-ui";
import { Player, DefaultUi, Audio } from "@vime/vue-next";
import FileInput from "./FileInput.vue";
import { onMounted, ref } from "vue";

onMounted(() => {
  remoteFileHandler();
});

const src = ref("");
const songTitle = ref("");
const remoteUrl = ref(
  "https://ia801402.us.archive.org/26/items/ttb2022-03-26.mk41v.edtyre/ttb2022-03-26.mk41v.edtyre.s2.t01.mp3"
);

const remoteFileHandler = async () => {
  try {
    const res = await fetch(remoteUrl.value);
    const blob = await res.blob();
    const file = new File([blob], "untitled", { type: blob.type });

    handleFile(file);
  } catch (e) {
    console.log(e);
  }
};

const localFileHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = (target.files as FileList)[0];

  remoteUrl.value = "";
  src.value = "";

  handleFile(file);
};

const handleFile = (file: File) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const base64data = reader.result;

    if (base64data) {
      src.value = base64data.toString();
      songTitle.value = file.name;
    }
  };
};
</script>
