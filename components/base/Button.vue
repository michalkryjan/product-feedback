<script setup lang="ts">
import type { IBaseContentProps } from 'components/base/Content.vue'
import { NuxtLinkProps } from 'nuxt/app'

export interface IBaseButtonProps {
  label?: string
  type?: 'button' | 'submit'
  theme?: 'gray' | 'blue' | 'navy' | 'darkNavy' | 'red' | 'purple' | 'text-blue'
  size?: 'fit' | 's1' | 's2'
  labelSize?: 's1' | 's2'
  href?: string
  isOneLine?: boolean
  disabled?: boolean
  noHoverEffect?: boolean
}

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  label: undefined,
  type: 'button',
  theme: 'gray',
  size: 's1',
  labelSize: 's1',
  isOneLine: true,
  href: undefined,
  disabled: false,
  noHoverEffect: false
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
  fit: 'w-fit h-fit',
  s1: 'px-[1.6rem] pt-[0.5rem] pb-[0.6rem] min-h-[3rem]',
  s2: 'px-[2.4rem] pt-[1.25rem] pb-[1.1rem] pb-[1.2rem]'
}

const configLabelSize: Record<NonNullable<IBaseButtonProps['labelSize']>, Partial<IBaseContentProps>> = {
  s1: {
    typography: 'label-1'
  },
  s2: {
    typography: 'label-2'
  }
}

const wrapperClasses = computed(() => {
  return [
    'flex flex-col flex-nowrap justify-center items-center border-0 rounded-primary transition-colors duration-200 [&:not([disabled])]:cursor-pointer decoration-none',
    props.noHoverEffect ? 'no-hover' : '',
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

    <span class="flex flex-row flex-nowrap items-center gap-x-[0.6rem]">
      <slot name="iconLeft" />

      <base-content
        v-if="label"
        :value="label"
        v-bind="labelAttrs"
        class="label" />

      <slot name="iconRight" />
    </span>
  </component>
</template>

<style lang="postcss">
.btn-gray {
  @apply bg-gray-2;

  &:not(:disabled):not(.no-hover):hover {
    @apply bg-gray-4;
  }
}

.btn-blue {
  @apply bg-blue-1;

  &:not(:disabled):not(.no-hover):hover {
    @apply bg-blue-2;
  }
}

.btn-navy {
  @apply bg-navy-1;

  &:not(:disabled):not(.no-hover):hover {
    @apply bg-navy-2;
  }
}

.btn-darkNavy {
  @apply bg-darkNavy;
}

.btn-red {
  @apply bg-red-1;

  &:not(:disabled):not(.no-hover):hover {
    @apply bg-red-2;
  }
}

.btn-purple {
  @apply bg-purple-1;

  &:not(:disabled):not(.no-hover):hover {
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