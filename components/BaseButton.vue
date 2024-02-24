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
  loading?: boolean
}

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  label: undefined,
  type: 'button',
  theme: 'gray',
  labelSize: 's1',
  isOneLine: true,
  href: undefined,
  disabled: false,
  loading: false
})

const configTheme: {
  wrapper: Record<NonNullable<IBaseButtonProps['theme']>, string>
  label: Record<NonNullable<IBaseButtonProps['theme']>, Partial<IBaseTextProps>>
} = {
  wrapper: {
    gray: 'bg-gray-2 hover:bg-gray-4',
    blue: 'bg-blue-1 hover:bg-blue-2',
    navy: 'bg-navy-1 hover:bg-navy-2',
    darkNavy: 'bg-darkNavy-1',
    red: 'bg-red-1 hover:bg-red-2',
    purple: 'bg-purple-1 hover:bg-purple-2'
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
    'flex flex-col flex-nowrap',
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