<script setup lang="ts">
interface IBaseIconProps {
  name: string
  filled?: boolean
  fillContainer?: boolean
}

const props = withDefaults(defineProps<IBaseIconProps>(), {
  filled: true,
  fillContainer: true
})

const classes = computed(() => {
  return [
    props.fillContainer ? '[&>svg]:!w-full [&>svg]:!h-full' : ''
  ]
})
</script>

<template>
  <nuxt-icon
    :name="name"
    :filled="filled"
    :class="classes" />
</template>
