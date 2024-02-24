<script setup lang="ts">
interface IBaseListProps {
  tag: 'ul' | 'ol'
  gapSize?: 's1'
}

const props = withDefaults(defineProps<IBaseListProps>(), {
  gapSize: 's1'
})

const configGapSize: Record<NonNullable<IBaseListProps['gapSize']>, string> = {
  s1: '[&>li]:mb-[0.8rem]'
}

const classes = computed(() => {
  return [
    'list-base m-0 p-0 [&>li:last-child]:mb-0',
    configGapSize[props.gapSize]
  ]
})
</script>

<template>
  <component
    :is="tag"
    :class="classes">
    <slot />
  </component>
</template>

<style lang="postcss">
ul.list-base,
ol.list-base {
  @apply list-none;
}

ul.list-base li,
ol.list-base li {
  @apply relative pl-[2.4rem];
}

ul.list-base li::before {
  @apply absolute left-0 top-[0.6rem] content-[""] w-[0.8rem] h-[0.8rem] rounded-full bg-current;
}
</style>