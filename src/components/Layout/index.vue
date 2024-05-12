<template>
  <main>
    <NavBar />
    <slot />
  </main>
</template>

<script setup>
import NavBar from "./Navbar";
</script>

<style scoped>
main {
  display: flex;
}
</style>