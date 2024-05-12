<template>
  <div
    class="product__item"
    v-for="(product) in products"
    :key="product.id"
    :style="{ 'background-image': `url(${product.url})`  }"
  >
    <span class="product__badge">TEXT</span>
    <ActionProduct
      :handleActionClick="handleActionClick"
      :product="product"
      v-if="!loading"
    />
  </div>
</template>

<script setup>
import { inject } from "vue";
import { Action } from "../../declaration";
import { changePositionItem } from "../../utils";
import { useNotify } from "@/plugin/Notification";
import ActionProduct from "../ActionProduct";
const notify = useNotify();
const handlerUpdateProduct = inject("handlerUpdateProduct");

const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const handleActionClick = (id, action) => {
  if (action === Action.DELETE) {
    const newProduct = props.products.filter((product) => product.id !== id);
    handlerUpdateProduct(newProduct);
    notify({ message: "Delete product success !", type: "success" });
    return;
  }

  const newProduct = changePositionItem({
    id,
    products: props.products,
    action,
  });
  if (!newProduct) return;
  handlerUpdateProduct(newProduct);
};
</script>

<style scoped>
.product__item {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid gray;
  height: 220px;
  cursor: pointer;
  position: relative;
}
.product__badge {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 40px;
  border-radius: 5px;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>