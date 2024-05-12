<template>
  <div class="product__action">
    <div
      class="item__action"
      v-for="(actionItem,index) in actions"
      :key="index"
      @click="handleActionClick(product.id, actionItem.action)"
      :style="{
          color: actionItem.action === Action.DELETE ? 'red' : 'black',
        }"
    >
      <span class="item__action-icon">
        <component :is="actionItem.component" />
      </span>
      <span class="item__action-text"> {{ actionItem.label }}</span>
    </div>
  </div>
</template>

<script setup>
import ArrowNext from "@/components/Icons/ArrowRight";
import ArrowLeft from "@/components/Icons/ArrowLeft";
import DeleteIcon from "@/components/Icons/Delete";
import { Action } from "../../declaration";

defineProps({
  product: {
    type: Object,
    default: () => {},
  },
  handleActionClick: {
    type: Function,
    default: () => {},
  },
});

const actions = [
  {
    label: "Move Left",
    component: ArrowLeft,
    action: Action.PREVIOUS,
  },
  {
    label: "Move Right",
    component: ArrowNext,
    action: Action.NEXT,
  },
  {
    label: "Delete",
    component: DeleteIcon,
    action: Action.DELETE,
  },
];
</script>

<style scoped>
.product__item:hover .product__action {
  opacity: 1;
  visibility: visible;
  transition: 0.3s;
}

.product__action {
  position: absolute;
  top: 5px;
  right: 5px;
  background: white;
  width: 60%;
  height: 120px;
  z-index: 2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 0px 0px 1px gainsboro;
  opacity: 0;
  visibility: hidden;
}
.product__action .item__action {
  display: flex;
  height: 40px;
  align-items: center;
  column-gap: 10px;
  border-bottom: 1px solid gray;
  padding: 10px;
  box-sizing: border-box;
}

.product__action .item__action:last-child {
  border-bottom: unset;
}

.item__action-icon {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item__action-text {
  flex: 1;
  display: flex;
  align-items: center;
}

.item__action:hover {
  background: rgb(212, 207, 207);
}
</style>