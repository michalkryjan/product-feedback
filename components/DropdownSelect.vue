<script setup lang="ts">
import type BaseDropdown from '~/components/base/Dropdown.vue'
import type { IBaseDropdownProps } from '~/components/base/Dropdown.vue'

export interface IDropdownSelectOption {
  id: string
  name: string
}

export interface IDropdownSelectProps extends IBaseDropdownProps {
  modelValue: IDropdownSelectOption | undefined
  options: IDropdownSelectOption[]
}

interface IDropdownSelectEmits {
  (e: 'update:modelValue', val: IDropdownSelectOption): void
}

const props = defineProps<IDropdownSelectProps>()
const emit = defineEmits<IDropdownSelectEmits>()

const dropdownRef = ref<InstanceType<typeof BaseDropdown> | null>(null)

const isOpened = computed(() => dropdownRef.value?.isOpened)

function handleSelect (option: IDropdownSelectOption) {
  emit('update:modelValue', option)

  if (dropdownRef.value) {
    dropdownRef.value.close()
  }
}

defineExpose({
  isOpened,
  open,
  close
})
</script>

<template>
  <base-dropdown
    ref="dropdownRef"
    :aria-label-opened="ariaLabelOpened"
    :aria-label-closed="ariaLabelClosed">
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <menu class="bg-white min-w-250 rounded-primary shadow-dropdown-default">
        <ul class="contents">
          <li
            v-for="option in options"
            :key="option.id"
            class="border-b border-gray-5 border-opacity-15 last:border-b-0">
            <button
              class="inline-flex justify-between items-center gap-x-12 w-full px-24 py-12 text-left hover:[&_.content]:text-purple-1 focus:[&_.content]:text-purple-1"
              @click="handleSelect(option)">
              <base-content
                tag="span"
                typography="text-body-1"
                color="gray"
                :class="[
                  'transition-colors duration-200',
                  modelValue?.id === option.id ? 'text-purple-1' : ''
                ]">
                {{ option.name }}
              </base-content>

              <base-icon
                v-if="modelValue?.id === option.id"
                name="check"
                class="block w-14 text-purple-1" />
            </button>
          </li>
        </ul>
      </menu>
    </template>
  </base-dropdown>
</template>