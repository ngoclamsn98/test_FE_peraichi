<template>
  <div class="upload__file">
    <slot />
    <input
      v-if="!loading"
      class="input__upload"
      type="file"
      multiple
      @change="handleFileInputChange"
      accept="image/*"
    >
  </div>
</template>
  
<script setup>
import { defineEmits } from "vue";
import { checkImageType } from "./utils";
import { useNotify } from "@/plugin/Notification";

const notify = useNotify();
const emit = defineEmits(["handleFile"]);

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const handleFileInputChange = (event) => {
  const files = event.target.files;
  if (!files?.length) return;
  const isImageType = checkImageType(Object.values(files));

  if (!isImageType)
    return notify({ type: "error", message: "File is not in correct format" });

  const blobUrls = [];

  for (let i = 0; i < files.length; i++) {
    const blobUrl = URL.createObjectURL(files[i]);
    blobUrls.push(blobUrl);
  }

  emit("fileHandler", { files, blobUrls });
};
</script>
  
<style scoped>
.upload__file {
  position: relative;
}
.input__upload {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 200px;
  height: 30px;
  cursor: pointer;
}
</style>
  