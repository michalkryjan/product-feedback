<script setup lang="ts">
export type BaseIconName = |
  'arrow-down' |
  'arrow-left' |
  'arrow-up' |
  'check' |
  'close' |
  'comments' |
  'edit-feedback' |
  'hamburger' |
  'new-feedback' |
  'plus' |
  'suggestions'

interface IBaseIconProps {
  name: BaseIconName
  filled?: boolean
  fillContainer?: boolean
}

const props = withDefaults(defineProps<IBaseIconProps>(), {
  filled: true,
  fillContainer: true
})

const classes = computed<string[]>(() => {
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
