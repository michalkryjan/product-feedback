<script setup lang="ts">
</script>

<template>
  <layout-page-wrapper width-type="l">
    <div class="grid grid-cols-[26rem_1fr] w-full gap-x-30 pt-90">
      <div class="col-start-1 col-end-1 flex flex-col gap-24">
        <slot name="sidebar" />
      </div>

      <div class="col-start-2 col-end-2 h-fit flex flex-col">
        <slot name="menu" />
        <slot name="board" />
      </div>
    </div>
  </layout-page-wrapper>
</template>