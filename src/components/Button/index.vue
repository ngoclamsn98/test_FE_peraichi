<template>
  <button
    class="btn"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
button {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
}
button:hover {
  opacity: 0.7;
}

button:disabled,
button[disabled] {
  opacity: 1;
}

button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #666666;
}
</style>