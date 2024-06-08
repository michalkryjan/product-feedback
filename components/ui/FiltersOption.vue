<script setup lang="ts">
export interface IFiltersOptionData {
  id: string
  name: string
}

interface IUiFiltersOptionProps {
  data: IFiltersOptionData
  theme?: 'gray'
  isSelected?: boolean
  isDisabled?: boolean
  inputId?: string
}

interface IUiFiltersOptionEmits {
  (e: 'select'): void
  (e: 'unselect'): void
}

const props = withDefaults(defineProps<IUiFiltersOptionProps>(), {
  theme: 'gray',
  isSelected: false,
  isDisabled: false,
  inputId: undefined
})

const emit = defineEmits<IUiFiltersOptionEmits>()

defineOptions({
  inheritAttrs: false
})

function toggle (): void {
  if (!props.isDisabled) {
    if (props.isSelected) {
      emit('unselect')
    } else {
      emit('select')
    }
  }
}
</script>

<template>
  <base-button
    :text="data?.name"
    size="s1"
    label-size="s2"
    :theme="isSelected ? 'blue' : 'gray'"
    :label-color="isSelected ? 'white' : 'blue'"
    :is-inactive="isSelected"
    :is-disabled="isDisabled"
    @click="toggle" />
</template>
