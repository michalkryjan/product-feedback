<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-[26rem_1fr] mx-auto max-w-[111rem] w-full gap-x-[3rem] pt-[9rem]">
    <div class="col-start-1 col-end-1 flex flex-col gap-[2.4rem]">
      <slot name="sidebar" />
    </div>

    <div class="col-start-2 col-end-2 h-fit flex flex-col">
      <slot name="menu" />
      <slot name="board" />
    </div>
  </div>
</template>