<script setup lang="ts">
import type { IFormFieldSelectOptionProps } from './FormFieldSelectOption.vue'

interface IFormFieldSelectProps {
  options: Array<IFormFieldSelectOptionProps['data']>
  value: string | string[] | undefined
  optionType?: IFormFieldSelectOptionProps['type']
  optionTheme?: IFormFieldSelectOptionProps['theme']
  gapSize?: 's1'
  addOptionAll?: boolean
}

interface IFormFieldSelectEmits {
  (e: 'change', val: typeof props.value): void
}

const props = withDefaults(defineProps<IFormFieldSelectProps>(), {
  optionType: 'button',
  optionTheme: 'gray',
  gapSize: 's1',
  addOptionAll: false
})

const emit = defineEmits<IFormFieldSelectEmits>()

defineOptions({
  inheritAttrs: false
})

const configGapSize: Record<NonNullable<IFormFieldSelectProps['gapSize']>, string> = {
  s1: 'gap-x-8 gap-y-14'
}

const wrapperClasses = computed(() => {
  return [
    'flex flex-row flex-wrap',
    configGapSize[props.gapSize]
  ]
})

const optionsComputed = computed(() => {
  return props.addOptionAll
    ? [
      {
        label: 'All',
        value: 'all'
      },
      ...props.options
    ]
    : props.options
})

const valueModel = computed<string | string[] | undefined>({
  get: () => props.value,
  set: (val: typeof props.value) => emit('change', val)
})

function handleSelect (val: string): void {
  if (Array.isArray(valueModel.value)) {
    if (props.addOptionAll && val === 'all') {
      valueModel.value = ['all']
    } else {
      valueModel.value = [...valueModel.value.filter(item => item !== 'all'), val]
    }
  } else {
    valueModel.value = val
  }
}

function handleUnselect (val: string): void {
  if (Array.isArray(valueModel.value)) {
    if (props.addOptionAll && val !== 'all') {
      valueModel.value = valueModel.value.filter(item => item !== val)

      if (valueModel.value.length === 1) {
        valueModel.value = ['all']
      }
    } else {
      valueModel.value = valueModel.value.filter(item => item !== val)
    }
  } else {
    valueModel.value = undefined
  }
}

onBeforeMount(() => {
  if (props.addOptionAll) {
    handleSelect('all')
  }
})
</script>

<template>
  <div :class="wrapperClasses">
    <form-field-select-option
      v-for="option in optionsComputed"
      :key="option.value"
      v-bind="$attrs"
      :data="option"
      :type="optionType"
      :theme="optionTheme"
      :is-disabled="Array.isArray(valueModel) && valueModel.length === 1 && valueModel.includes('all') && option.value === 'all'"
      :is-selected="valueModel === option.value || (Array.isArray(valueModel) && valueModel.includes(option.value))"
      @select="handleSelect($event)"
      @unselect="handleUnselect($event)" />
  </div>
</template>
