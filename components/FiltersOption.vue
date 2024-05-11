<script setup lang="ts">
export interface IFiltersOptionData {
  id: string
  name: string
}

interface IFiltersOptionProps {
  data: IFiltersOptionData
  theme?: 'gray'
  isSelected?: boolean
  isDisabled?: boolean
  inputId?: string
}

interface IFiltersOptionEmits {
  (e: 'select', val: string): void
  (e: 'unselect', val: string): void
}

const props = withDefaults(defineProps<IFiltersOptionProps>(), {
  theme: 'gray',
  isSelected: false,
  isDisabled: false,
  inputId: undefined
})

const emit = defineEmits<IFiltersOptionEmits>()

defineOptions({
  inheritAttrs: false
})

function toggle (): void {
  if (!props.isDisabled) {
    if (props.isSelected) {
      emit('unselect', props.data.id)
    } else {
      emit('select', props.data.id)
    }
  }
}
</script>

<template>
  <base-button
    :text="data.name"
    size="s1"
    label-size="s2"
    :theme="isSelected ? 'blue' : 'gray'"
    :label-color="isSelected ? 'white' : 'blue'"
    :is-inactive="isSelected"
    :is-disabled="isDisabled"
    @click="toggle" />
</template>
