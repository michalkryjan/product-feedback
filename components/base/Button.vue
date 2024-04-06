<script setup lang="ts">
import type { IBaseContentProps } from 'components/base/Content.vue'
import { NuxtLinkProps } from 'nuxt/app'

export interface IBaseButtonProps {
  label?: string
  type?: 'button' | 'submit'
  theme?: 'gray' | 'blue' | 'navy' | 'darkNavy' | 'red' | 'purple' | 'text-blue'
  size?: 'fit' | 's1' | 's2' | 's3' | 's4'
  labelSize?: 's1' | 's2'
  labelColor?: 'blue' | 'white' | 'navy-1'
  href?: string
  isOneLine?: boolean
  disabled?: boolean
  inactive?: boolean
}

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  label: undefined,
  type: 'button',
  theme: 'gray',
  size: 's1',
  labelSize: 's1',
  labelColor: undefined,
  isOneLine: true,
  href: undefined,
  disabled: false,
  inactive: false
})

const configTheme: {
  wrapper: Record<NonNullable<IBaseButtonProps['theme']>, string>
  label: Record<NonNullable<IBaseButtonProps['theme']>, Partial<IBaseContentProps>>
} = {
  wrapper: {
    gray: 'btn-gray',
    blue: 'btn-blue',
    navy: 'btn-navy',
    darkNavy: 'btn-darkNavy',
    red: 'btn-red',
    purple: 'btn-purple',
    'text-blue': 'btn-text-blue'
  },
  label: {
    gray: {
      color: 'blue'
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
    },
    'text-blue': {
      color: 'blue',
      isUnderline: true
    }
  }
}

const configWrapperSize: Record<NonNullable<IBaseButtonProps['size']>, string> = {
  fit: '',
  s1: 'px-16 pt-5 pb-6 min-h-30',
  s2: 'px-24 pt-11 pb-12',
  s3: 'px-9 py-14',
  s4: 'pl-16 pr-12 py-12'
}

const configLabelSize: Record<NonNullable<IBaseButtonProps['labelSize']>, Partial<IBaseContentProps>> = {
  s1: {
    typography: 'text-label-1'
  },
  s2: {
    typography: 'text-label-2'
  }
}

const wrapperClasses = computed<string[]>(() => {
  return [
    'flex flex-col flex-nowrap justify-center items-center gap-y-8 w-fit h-fit border-0 rounded-primary transition-colors duration-200 [&:not([disabled])]:cursor-pointer decoration-none',
    props.inactive ? 'inactive' : '',
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

const labelAttrs = computed<Partial<IBaseContentProps>>(() => {
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

    <span class="flex flex-row flex-nowrap items-center gap-x-8">
      <slot name="iconLeft" />

      <base-content
        v-if="label"
        v-bind="labelAttrs"
        class="label">
        <span v-html="useOrphans(label)" />
      </base-content>

      <slot name="iconRight" />
    </span>
  </component>
</template>

<style lang="postcss">
.btn-gray {
  @apply bg-gray-2;

  &:not(:disabled):not(.inactive):hover {
    @apply bg-gray-4;
  }
}

.btn-blue {
  @apply bg-blue-1;

  &:not(:disabled):not(.inactive):hover {
    @apply bg-blue-2;
  }
}

.btn-navy {
  @apply bg-navy-1;

  &:not(:disabled):not(.inactive):hover {
    @apply bg-navy-2;
  }
}

.btn-darkNavy {
  @apply bg-darkNavy;
}

.btn-red {
  @apply bg-red-1;

  &:not(:disabled):not(.inactive):hover {
    @apply bg-red-2;
  }
}

.btn-purple {
  @apply bg-purple-1;

  &:not(:disabled):not(.inactive):hover {
    @apply bg-purple-2;
  }
}

.btn-text-blue {
  @apply bg-transparent;

  &:hover .label {
    @apply text-lightBlue-2;
  }
}
</style>