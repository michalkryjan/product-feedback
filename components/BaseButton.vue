<script setup lang="ts">
import { NuxtLinkProps } from 'nuxt/app'
import type { IBaseTextProps } from './BaseText.vue'

export interface IBaseButtonProps {
  label?: string
  type?: 'button' | 'submit'
  theme?: 'gray' | 'blue' | 'navy' | 'darkNavy' | 'red' | 'purple'
  size?: 's1'
  labelSize?: 's1' | 's2'
  href?: string
  isOneLine?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  label: undefined,
  type: 'button',
  theme: 'gray',
  size: 's1',
  labelSize: 's1',
  isOneLine: true,
  href: undefined,
  disabled: false
})

const configTheme: {
  wrapper: Record<NonNullable<IBaseButtonProps['theme']>, string>
  label: Record<NonNullable<IBaseButtonProps['theme']>, Partial<IBaseTextProps>>
} = {
  wrapper: {
    gray: 'btn-gray',
    blue: 'btn-blue',
    navy: 'btn-navy',
    darkNavy: 'btn-darkNavy',
    red: 'btn-red',
    purple: 'btn-purple'
  },
  label: {
    gray: {
      color: 'blue-1'
    },
    blue: {
      color: 'white'
    },
    navy: {
      color: 'white'
    },
    darkNavy: {
      color: 'white'
    },
    red: {
      color: 'white'
    },
    purple: {
      color: 'white'
    }
  }
}

const configWrapperSize: Record<NonNullable<IBaseButtonProps['size']>, string> = {
  s1: 'px-[1.6rem] pt-[0.5rem] pb-[0.6rem] min-h-[3rem]'
}

const configLabelSize: Record<NonNullable<IBaseButtonProps['labelSize']>, Partial<IBaseTextProps>> = {
  s1: {
    typography: 'label-1'
  },
  s2: {
    typography: 'label-2'
  }
}

const wrapperClasses = computed(() => {
  return [
    'flex flex-col flex-nowrap justify-center items-center border-0 rounded-primary transition-colors duration-200 [&:not([disabled])]:cursor-pointer',
    configWrapperSize[props.size],
    configTheme.wrapper[props.theme]
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
      disabled: props.disabled
    }
  }
})

const labelAttrs = computed<Partial<IBaseTextProps>>(() => {
  if (props.label) {
    return {
      tag: 'span',
      align: 'center',
      transition: 'color',
      isOneLine: props.isOneLine,
      ...configLabelSize[props.labelSize],
      ...configTheme.label[props.theme]
    }
  } else {
    return {}
  }
})
</script>

<template>
  <component
    :is="wrapperTag"
    v-bind="wrapperAtrrs"
    :class="wrapperClasses">
    <slot name="iconTop" />

    <span class="flex flex-row flex-nowrap">
      <slot name="iconLeft" />

      <base-text
        v-if="label"
        :value="label"
        v-bind="labelAttrs" />

      <slot name="iconRight" />
    </span>
  </component>
</template>