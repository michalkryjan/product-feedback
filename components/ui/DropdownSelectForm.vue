<script setup lang="ts">
import type DropdownSelect from '~/components/DropdownSelect.vue'
import type { IDropdownSelectOption, IUiDropdownSelectProps } from './DropdownSelect.vue'

interface IUiDropdownSelectFormProps extends Omit<IUiDropdownSelectProps, 'modelValue'> {
  id: string
  initialValue?: IDropdownSelectOption
  hasError?: boolean
}

interface IUiDropdownSelectFormEmits {
  (e: 'update-value', val: IDropdownSelectOption | undefined): void
}

const props = withDefaults(defineProps<IUiDropdownSelectFormProps>(), {
  initialValue: undefined
})
const emit = defineEmits<IUiDropdownSelectFormEmits>()

const dropdownSelectRef = ref<InstanceType<typeof DropdownSelect> | null>(null)

const selectedOption = ref<IDropdownSelectOption | undefined>(props.initialValue)
const selectedOptionModel = computed<IDropdownSelectOption | undefined>({
  get: () => selectedOption.value,
  set: (val: IDropdownSelectOption | undefined) => {
    selectedOption.value = val
    emit('update-value', val)
  }
})
</script>

<template>
  <ui-dropdown-select
    ref="dropdownSelectRef"
    v-model="selectedOptionModel"
    :options="options"
    :aria-label-opened="ariaLabelOpened"
    :aria-label-closed="ariaLabelClosed"
    class="w-full">
    <template #trigger>
      <span
        :class="[
          'inline-flex items-center gap-8 w-full h-48 px-24 py-16 text-15 rounded-5 text-navy-1 border border-gray-3 bg-gray-3 transition-colors duration-200',
          dropdownSelectRef?.isOpened ? 'border-blue-1' : '',
          hasError ? 'border-red-1' : ''
        ]">
        <base-content
          tag="span"
          typography="text-label-3"
          color="navy"
          :class="[
            'transition-opacity',
            dropdownSelectRef?.isOpened ? 'opacity-75' : ''
          ]">
          {{ selectedOption?.name ?? '' }}
        </base-content>

        <base-icon
          name="arrow-down"
          :class="[
            'w-10 text-white transition-transform',
            dropdownSelectRef?.isOpened ? '-rotate-180' : 'rotate-0'
          ]" />
      </span>

      <input
        :id="id"
        :value="selectedOption?.id"
        class="hidden">
    </template>
  </ui-dropdown-select>
</template>