<script setup lang="ts">
interface IFormWrapperProps {
  onSubmit: (e?: Event | undefined) => (void | Promise<void> | Promise<Promise<void> | undefined>)
}

const props = defineProps<IFormWrapperProps>()

const formWrapper = ref<HTMLFormElement | null>(null)

const classes = computed(() => {
  return [
    'flex flex-col flex-nowrap'
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
