<script setup lang="ts">
import { NuxtLinkProps } from 'nuxt/app'
import type { IBaseTextProps } from './BaseText.vue'

export interface IBaseButtonProps {
  label?: string
  type?: 'button' | 'submit'
  theme?: 'gray' | 'blue' | 'navy' | 'darkNavy' | 'red' | 'purple'
  labelSize?: 's1' | 's2'
  href?: string
  isOneLine?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  label: undefined,
  type: 'button',
  theme: 'gray',
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

const configLabelSize: Record<NonNullable<IBaseButtonProps['labelSize']>, Partial<IBaseTextProps>> = {
  s1: {
    typography: 'text-label-1'
  },
  s2: {
    typography: 'text-label-2'
  }
}

const wrapperClasses = computed(() => {
  return [
    'flex flex-col flex-nowrap transition-colors duration-200',
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