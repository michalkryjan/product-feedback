<script setup lang="ts">
import type { IFormFieldSelectOptionProps } from './FormFieldSelectOption.vue'

interface IFormFieldSelectProps {
  optionType?: IFormFieldSelectOptionProps['type']
  optionTheme?: IFormFieldSelectOptionProps['theme']
  options: Array<IFormFieldSelectOptionProps['data']>
  value: string | string[] | undefined
  gapSize?: 's1'
}

interface IFormFieldSelectEmits {
  (e: 'change', val: string | string[] | undefined): void
}

const props = withDefaults(defineProps<IFormFieldSelectProps>(), {
  optionType: 'button',
  optionTheme: 'gray',
  gapSize: 's1'
})

const emit = defineEmits<IFormFieldSelectEmits>()

defineOptions({
  inheritAttrs: false
})

const configGapSize: Record<NonNullable<IFormFieldSelectProps['gapSize']>, string> = {
  s1: 'gap-x-[0.8rem] gap-y-[1.4rem]'
}

const wrapperClasses = computed(() => {
  return [
    'flex flex-row flex-wrap',
    configGapSize[props.gapSize]
  ]
})

const valueModel = computed<string | string[] | undefined>({
  get: () => props.value,
  set: (val: string | string[] | undefined) => emit('change', val)
})

function handleSelect (val: string): void {
  if (Array.isArray(valueModel.value)) {
    valueModel.value = [...valueModel.value, val]
  } else {
    valueModel.value = val
  }
}

function handleUnselect (val: string): void {
  if (Array.isArray(valueModel.value)) {
    valueModel.value = valueModel.value.filter(item => item !== val)
  } else {
    valueModel.value = undefined
  }
}
</script>

<template>
  <div :class="wrapperClasses">
    <form-field-select-option
      v-for="option in options"
      :key="option.value"
      v-bind="$attrs"
      :data="option"
      :type="optionType"
      :theme="optionTheme"
      :is-selected="valueModel === option.value || (Array.isArray(valueModel) && valueModel.includes(option.value))"
      @select="handleSelect($event)"
      @unselect="handleUnselect($event)" />
  </div>
</template>
