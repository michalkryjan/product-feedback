<script setup lang="ts">
import type { Data } from 'types/data'
import type { IBaseButtonProps } from './base/BaseButton.vue'
import type { IBaseContentProps } from './base/BaseContent.vue'

export interface IFormFieldSelectOptionProps {
  data: Data.Components.FormFieldSelectOption
  type?: 'input' | 'button'
  theme?: 'gray'
  isSelected?: boolean
  isDisabled?: boolean
}

interface IFormFieldSelectOptionEmits {
  (e: 'select', val: string): void
  (e: 'unselect', val: string): void
}

const props = withDefaults(defineProps<IFormFieldSelectOptionProps>(), {
  type: 'input',
  theme: 'gray',
  isSelected: false,
  isDisabled: false
})

const emit = defineEmits<IFormFieldSelectOptionEmits>()

defineOptions({
  inheritAttrs: false
})

const configTheme: Record<NonNullable<IFormFieldSelectOptionProps['theme']>, {
  inputWrapper: {
    idle: string
    active: string
  }
  inputLabel: {
    idle: IBaseContentProps['color']
    active: IBaseContentProps['color']
  }
  button: {
    idle: IBaseButtonProps['theme']
    active: IBaseButtonProps['theme']
  }
}> = {
  gray: {
    inputWrapper: {
      idle: 'btn-gray',
      active: 'btn-blue'
    },
    inputLabel: {
      idle: 'blue',
      active: 'white'
    },
    button: {
      idle: 'gray',
      active: 'blue'
    }
  }
}

const {
  formFieldWrapper
} = useDependencyInjectionSchema()

const fieldName = inject(formFieldWrapper.name, '')

const classesInputWrapper = computed<string[] | null>(() => {
  return props.type === 'input'
    ? [
      'flex justify-center items-center w-fit px-16 py-6 rounded-primary transition-colors duration-200 cursor-pointer select-none',
      props.isSelected ? configTheme[props.theme].inputWrapper.active : configTheme[props.theme].inputWrapper.idle
    ]
    : null
})

function toggle (): void {
  if (!props.isDisabled) {
    if (props.isSelected) {
      emit('unselect', props.data.value)
    } else {
      emit('select', props.data.value)
    }
  }
}
</script>

<template>
  <span
    v-if="type === 'input'"
    :class="classesInputWrapper"
    :disabled="isDisabled"
    @click="toggle">
    <input
      v-bind="$attrs"
      :name="fieldName"
      type="checkbox"
      class="hidden"
      :aria-labelledby="fieldName + '-' + data.value">

    <base-content
      :id="fieldName + '-' + data.value"
      tag="span"
      typography="label-2"
      align="center"
      transition="color"
      :color="isSelected ? configTheme[theme].inputLabel.active : configTheme[theme].inputLabel.idle"
      is-one-line
      :value="data.label" />
  </span>

  <base-button
    v-else
    :label="data.label"
    :disabled="isDisabled"
    label-size="s2"
    :theme="isSelected ? configTheme[theme].button.active : configTheme[theme].button.idle"
    :no-hover-effect="isSelected"
    @click="toggle" />
</template>
