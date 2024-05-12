<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style="background: none;"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#4096ff"
      stroke-width="8"
      r="35"
      stroke-dasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>

</template>
<style scoped>
svg {
  width: 35px;
  height: 35px;
}
</style>