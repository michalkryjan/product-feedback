<script setup lang="ts">
import { NuxtLinkProps } from 'nuxt/app'

export interface IBaseButtonProps {
  text?: string
  href?: string
  type?: 'button' | 'submit'
  size?: 'fit' | 's1' | 's2' | 's3' | 's4'
  theme?: 'gray' | 'blue' | 'navy' | 'darkNavy' | 'red' | 'purple' | 'transparent'
  labelSize?: 's1' | 's2'
  labelColor?: 'blue' | 'white' | 'navy'
  isUnderline?: boolean
  isOneLine?: boolean
  isDisabled?: boolean
  isInactive?: boolean
}

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  text: undefined,
  href: undefined,
  type: 'button',
  theme: 'gray',
  size: 'fit',
  labelSize: 's1',
  labelColor: 'blue',
  isOneLine: true,
  isDisabled: false,
  isInactive: false
})

const configWrapperTheme: Record<NonNullable<IBaseButtonProps['theme']>, string> = {
  gray: 'btn-gray',
  blue: 'btn-blue',
  navy: 'btn-navy',
  darkNavy: 'btn-darkNavy',
  red: 'btn-red',
  purple: 'btn-purple',
  transparent: 'btn-transparent'
}

const configWrapperSize: Record<NonNullable<IBaseButtonProps['size']>, string> = {
  fit: '',
  s1: 'px-16 pt-5 pb-6 min-h-30',
  s2: 'px-24 pt-11 pb-12',
  s3: 'px-9 py-14',
  s4: 'pl-16 pr-12 py-12'
}

const configlabelColor: Record<NonNullable<IBaseButtonProps['labelColor']>, string> = {
  white: 'text-white',
  blue: 'text-blue-1',
  navy: 'text-navy-1'
}

const configLabelSize: Record<NonNullable<IBaseButtonProps['labelSize']>, string> = {
  s1: 'text-label-1',
  s2: 'text-label-2'
}

const wrapperClasses = computed<string[]>(() => {
  return [
    'flex flex-col flex-nowrap justify-center items-center gap-y-8 w-fit h-fit border-0 rounded-primary duration-200 [&:not([disabled])]:cursor-pointer decoration-none',
    props.isInactive ? 'inactive' : '',
    props.theme === 'transparent' ? 'transition-opacity' : 'transition-colors',
    configWrapperSize[props.size],
    configWrapperTheme[props.theme]
  ]
})

const labelClasses = computed<string[]>(() => {
  return [
    'text-center transition-colors',
    configLabelSize[props.labelSize],
    configlabelColor[props.labelColor],
    props.isOneLine ? 'u-text-nowrap' : '',
    props.isUnderline ? 'underline' : ''
  ]
})

const wrapperTag = computed(() => {
  if (props?.href) {
    return resolveComponent('NuxtLink')
  } else {
    return 'button'
  }
})

const wrapperAtrrs = computed<NuxtLinkProps | HTMLButtonElement['attributes']>(() => {
  if (props?.href) {
    return {
      to: props.href
    }
  } else {
    return {
      type: props.type,
      disabled: props.isDisabled
    }
  }
})
</script>

<template>
  <component
    :is="wrapperTag"
    v-bind="wrapperAtrrs"
    :class="wrapperClasses">
    <slot name="icon-top" />

    <span class="flex flex-row flex-nowrap items-center gap-x-8">
      <slot name="icon-left" />

      <span
        v-if="text"
        :class="labelClasses"
        v-html="useOrphans(text)" />

      <slot name="icon-right" />
    </span>
  </component>
</template>

<style lang="postcss" scoped>
.btn-gray {
  @apply bg-gray-2;

  &:not(:disabled):not(.inactive):hover,
  &:not(:disabled):not(.inactive):focus,
  &:not(:disabled):not(.inactive):active{
    @apply bg-gray-4;
  }
}

.btn-blue {
  @apply bg-blue-1;

  &:not(:disabled):not(.inactive):hover,
  &:not(:disabled):not(.inactive):focus,
  &:not(:disabled):not(.inactive):active {
    @apply bg-blue-2;
  }
}

.btn-navy {
  @apply bg-navy-1;

  &:not(:disabled):not(.inactive):hover,
  &:not(:disabled):not(.inactive):focus,
  &:not(:disabled):not(.inactive):active {
    @apply bg-navy-2;
  }
}

.btn-darkNavy {
  @apply bg-darkNavy;
}

.btn-red {
  @apply bg-red-1;

  &:not(:disabled):not(.inactive):hover,
  &:not(:disabled):not(.inactive):focus,
  &:not(:disabled):not(.inactive):active {
    @apply bg-red-2;
  }
}

.btn-purple {
  @apply bg-purple-1;

  &:not(:disabled):not(.inactive):hover,
  &:not(:disabled):not(.inactive):focus,
  &:not(:disabled):not(.inactive):active {
    @apply bg-purple-2;
  }
}

.btn-transparent {
  @apply bg-transparent;

  &:not(:disabled):not(.inactive):hover,
  &:not(:disabled):not(.inactive):focus,
  &:not(:disabled):not(.inactive):active {
    @apply opacity-80;
  }
}
</style>