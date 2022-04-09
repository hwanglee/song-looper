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
          <n-button
            :focusable="false"
            size="large"
            :onclick="remoteFileHandler"
          >
            Submit
          </n-button>
        </n-input-group>
      </n-form-item>
    </n-space>
    <AudioPlayer :data-src="dataSrc" />
  </n-space>
</template>

<script setup lang="ts">
import { NSpace, NH1, NFormItem, NButton, NInput, NInputGroup } from "naive-ui";
import FileInput from "./FileInput.vue";
import { onMounted, ref } from "vue";
import AudioPlayer from "./AudioPlayer.vue";

onMounted(() => {
  remoteFileHandler();
});

const dataSrc = ref("");
const songTitle = ref("");
const remoteUrl = ref(
  "https://ia801402.us.archive.org/26/items/ttb2022-03-26.mk41v.edtyre/ttb2022-03-26.mk41v.edtyre.s2.t01.mp3"
);

const remoteFileHandler = async () => {
  try {
    const res = await fetch(remoteUrl.value);
    console.log(res);
    const blob = await res.blob();
    const file = new File([blob], "Untitled", { type: blob.type });

    handleFile(file);
  } catch (e) {
    console.log(e);
  }
};

const localFileHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = (target.files as FileList)[0];

  remoteUrl.value = "";
  dataSrc.value = "";

  handleFile(file);
};

const handleFile = (file: File) => {
  const url = URL.createObjectURL(file);
  dataSrc.value = url;
  songTitle.value = file.name;
};
</script>
