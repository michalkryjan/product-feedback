<script setup lang="ts">
interface IBaseHeaderProps {
  variant: '1' | '2' | '3'
}

const props = defineProps<IBaseHeaderProps>()

const configVariant: Record<NonNullable<IBaseHeaderProps['variant']>, string> = {
  1: 'mb-40',
  2: 'mb-32',
  3: 'mb-24'
}
</script>

<template>
  <header :class="configVariant[variant]">
    <slot />
  </header>
</template>