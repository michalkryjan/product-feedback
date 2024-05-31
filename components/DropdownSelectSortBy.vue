<script setup lang="ts">
import type DropdownSelect from '~/components/DropdownSelect.vue'
import type { IDropdownSelectOption, IDropdownSelectProps } from './DropdownSelect.vue'

interface IDropdownSelectSortByProps extends IDropdownSelectProps {}

interface IDropdownSelectSortByEmits {
  (e: 'update:modelValue', val: IDropdownSelectOption | undefined): void
}

const props = defineProps<IDropdownSelectSortByProps>()
const emit = defineEmits<IDropdownSelectSortByEmits>()

const dropdownSelectRef = ref<InstanceType<typeof DropdownSelect> | null>(null)

const selectedOption = computed<IDropdownSelectOption | undefined>({
  get: () => props.modelValue,
  set: (val: IDropdownSelectOption | undefined) => emit('update:modelValue', val)
})
</script>

<template>
  <dropdown-select
    ref="dropdownSelectRef"
    v-model="selectedOption"
    :options="options"
    aria-label-opened="Hide sorting options"
    aria-label-closed="Show sorting options">
    <template #trigger>
      <span class="inline-flex items-center gap-8">
        <base-content
          tag="span"
          typography="text-label-3"
          color="light"
          :class="[
            'transition-opacity',
            dropdownSelectRef?.isOpened ? 'opacity-75' : ''
          ]">
          Sort by:
          <span class="font-bold">
            {{ modelValue?.name ?? 'not selected' }}
          </span>
        </base-content>

        <base-icon
          name="arrow-down"
          :class="[
            'w-10 text-white transition-transform',
            dropdownSelectRef?.isOpened ? '-rotate-180' : 'rotate-0'
          ]" />
      </span>
    </template>
  </dropdown-select>
</template>