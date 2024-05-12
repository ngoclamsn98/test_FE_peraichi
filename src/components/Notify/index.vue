<template>
  <div v-if="notifications.length">
    <div
      class="notification__component"
      :class="`notification-${index+1}`"
      v-for="(notify,index) in notifications"
      :key="index"
      :style="{'background':notify.type === 'success' ? '#5bdb25' : 'red'}"
    >{{ notify.message }}</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps({
  notifications: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.notification__component {
  position: fixed;
  top: 10px;
  right: -300px;
  width: 300px;
  height: 55px;
  border-radius: 10px;
  background: #5bdb25;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    right: -300px;
  }
  to {
    right: 10px;
  }
}
</style>