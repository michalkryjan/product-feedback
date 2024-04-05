<script setup lang="ts">
interface IFormWrapperProps {
  showSubmitError?: boolean
  gapSize?: 's1' | 's2'
  onSubmit: (e?: Event | undefined) => (void | Promise<void> | Promise<Promise<void> | undefined>)
}

const props = withDefaults(defineProps<IFormWrapperProps>(), {
  gapSize: 's1'
})

const configGapSize: Record<NonNullable<IFormWrapperProps['gapSize']>, string> = {
  s1: 'gap-y-24 mb-32',
  s2: 'gap-y-16 mb-16'
}

const formWrapper = ref<HTMLFormElement | undefined>(undefined)

const classes = computed(() => {
  return [
    'flex flex-col flex-nowrap',
    configGapSize[props.gapSize]
  ]
})
</script>

<template>
  <form
    ref="formWrapper"
    method=""
    action=""
    @submit="onSubmit">
    <div :class="classes">
      <slot name="main" />
    </div>

    <slot name="footer" />
  </form>
</template>
