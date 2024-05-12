<template>
  <div class="product-page">
    <div
      class="list__product"
      v-if="products.length"
    >
      <ProductItem
        :products="products"
        :loading="loading"
      />
    </div>
    <Upload
      @fileHandler="fileHandler"
      :loading="loading"
    >

      <div
        class="upload__content"
        :style="{background: loading ? 'gray' : 'white'}"
      >
        <span class="folder__icon">
          <Folder />
        </span>
        <span>Upload multiple image</span>
      </div>
    </Upload>

    <Button
      :disabled="!products.length || loading"
      :loading="loading"
      @click="handlerCreateProduct"
    >
      <span>Submit</span>
    </Button>
  </div>
</template>

<script setup>
import ProductItem from "./components/ProductItem";
import Folder from "@/components/Icons/Folder";
import Upload from "@/components/Upload";
import Button from "@/components/Button";
import { handlerCallApi } from "@/plugin/fetcher";
import { onMounted, ref, provide, inject } from "vue";
import { useNotify } from "@/plugin/Notification";

const files = ref([]);
const products = ref([]);
const loading = ref(false);
const notify = useNotify();

const fileHandler = (image) => {
  if (!image?.blobUrls?.length || !image?.files?.length) return;
  files.value = Object.values(image.files);
  products.value = image.blobUrls.map((url, index) => ({
    id: index + 1,
    display_order: index + 1,
    url: url,
    file: files.value[index],
  }));
};

const handlerUpdateProduct = (data) => {
  products.value = data;
};

const handlerCreateProduct = async () => {
  const formData = new FormData();

  products.value.forEach(({ display_order, file }, index) => {
    formData.append(`products.${index}.display_order`, display_order);
    formData.append(`products.${index}.file`, file);
  });

  try {
    loading.value = true;
    const result = await handlerCallApi({
      method: "POST",
      url: "post",
      body: formData,
    });
    loading.value = false;

    notify({
      message: "Add list product success!",
      type: "success",
    });
  } catch (error) {
    loading.value = false;
    notify({
      message: "Adding new list product failed!",
      type: "error",
    });
  }
};

provide("handlerUpdateProduct", handlerUpdateProduct);
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
}
.list__product {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  grid-template-rows: 220px;
  padding: 20px;
}
@media screen and (min-width: 240px) {
  .list__product {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (min-width: 480px) {
  .list__product {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .list__product {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .list__product {
    grid-template-columns: repeat(4, 1fr);
  }
}

.upload__product {
  display: flex;
  column-gap: 10px;
}

.folder__icon {
  width: 20px;
}
.upload__content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  column-gap: 10px;
  cursor: pointer;
}
.upload__file {
  margin: 30px 20px;
}

.btn {
  width: 80%;
  margin: 0 auto;
  background: rgb(3 193 105);
  color: white;
}
</style>