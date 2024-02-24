<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-[26rem_1fr] mx-auto max-w-[111rem] w-full gap-x-[3rem] pt-[9rem]">
    <div class="col-start-1 col-end-1">
      <slot name="sidebar" />
    </div>

    <div class="menu">
      <slot name="menu" />
    </div>

    <div class="board">
      <slot name="board" />
    </div>
  </div>
</template>