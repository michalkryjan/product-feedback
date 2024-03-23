<script setup lang="ts">
interface IBaseListProps {
  tag: 'ul' | 'ol'
  gapSize?: 's1'
}

const props = withDefaults(defineProps<IBaseListProps>(), {
  gapSize: 's1'
})

const configGapSize: Record<NonNullable<IBaseListProps['gapSize']>, string> = {
  s1: '[&_li]:mb-[0.8rem]'
}

const classes = computed(() => {
  return [
    'list-base',
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
  @apply list-none flex flex-col m-0 p-0;

  & li {
    @apply relative pl-24;

    &:last-child {
      @apply mb-0;
    }
  }
}

ul.list-base li::before {
  @apply absolute left-0 top-6 content-[""] w-8 h-8 rounded-full bg-current;
}
</style>