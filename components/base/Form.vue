<script setup lang="ts">
export interface IBaseFormProps {
  gapSize?: 's1' | 's2'
  onSubmit: (e?: Event | undefined) => (void | Promise<void> | Promise<Promise<void> | undefined>)
}

const props = withDefaults(defineProps<IBaseFormProps>(), {
  gapSize: 's1'
})

const configGapSize: Record<NonNullable<IBaseFormProps['gapSize']>, string> = {
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
