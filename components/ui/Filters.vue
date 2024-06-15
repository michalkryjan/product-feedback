<script setup lang="ts">
import type { IFiltersOptionData } from '~/components/ui/FiltersOption.vue'

interface IUiFiltersProps {
  options: IFiltersOptionData[]
  value: IFiltersOptionData | undefined
  gapSize?: 's1'
}

interface IUiFiltersEmits {
  (e: 'update:value', val: IFiltersOptionData): void
}

const props = withDefaults(defineProps<IUiFiltersProps>(), {
  optionTheme: 'gray',
  gapSize: 's1'
})
const emit = defineEmits<IUiFiltersEmits>()

defineOptions({
  inheritAttrs: false
})

const optionAll = {
  id: 'all',
  name: 'All'
}

const configGapSize: Record<NonNullable<IUiFiltersProps['gapSize']>, string> = {
  s1: 'gap-x-8 gap-y-14'
}

const wrapperClasses = computed(() => {
  return [
    'flex flex-row flex-wrap',
    configGapSize[props.gapSize]
  ]
})

const optionsComputed = computed(() => {
  return [
    optionAll,
    ...props.options
  ]
})

const valueModel = computed<IFiltersOptionData>({
  get: () => props.value ? props.value : optionAll,
  set: (val: IFiltersOptionData) => emit('update:value', val)
})

function handleSelect (val: IFiltersOptionData): void {
  valueModel.value = val
}

function handleUnselect (): void {
  if (valueModel.value?.id !== 'all') {
    valueModel.value = optionAll
  }
}
</script>

<template>
  <div :class="wrapperClasses">
    <ui-filters-option
      v-for="option in optionsComputed"
      :key="option?.id"
      v-bind="$attrs"
      :data="option"
      theme="gray"
      :is-disabled="valueModel?.id === 'all' && option?.id === 'all'"
      :is-selected="valueModel?.id === option?.id"
      @select="handleSelect(option)"
      @unselect="handleUnselect()" />
  </div>
</template>
