<script setup lang="ts">
interface IBaseTagProps {
  text?: string
  size?: 's1'
  theme?: 'gray' | 'blue' | 'navy' | 'darkNavy' | 'red' | 'purple'
  labelColor?: 'blue' | 'white' | 'navy'
  isOneLine?: boolean
}

const props = withDefaults(defineProps<IBaseTagProps>(), {
  text: undefined,
  size: 's1',
  theme: 'gray',
  labelColor: 'blue',
  isOneLine: true
})

const configSize = {
  s1: 'px-16 pt-5 pb-6 min-h-30'
}

const configTheme: Record<NonNullable<IBaseTagProps['theme']>, string> = {
  gray: 'bg-gray-2',
  blue: 'bg-blue-1',
  navy: 'bg-navy-1',
  darkNavy: 'bg-darkNavy',
  red: 'bg-red-1',
  purple: 'bg-purple-1'
}

const configlabelColor: Record<NonNullable<IBaseTagProps['labelColor']>, string> = {
  white: 'text-white',
  blue: 'text-blue-1',
  navy: 'text-navy-1'
}

const classes = computed<string[]>(() => {
  return [
    'flex justify-center items-center w-fit h-fit rounded-primary text-label-1 text-center',
    configSize[props.size],
    configTheme[props.theme],
    configlabelColor[props.labelColor],
    props.isOneLine ? 'u-text-nowrap' : ''
  ]
})
</script>

<template>
  <span
    v-if="text"
    :class="classes"
    v-html="useOrphans(text)" />
</template>