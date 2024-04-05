<script lang="ts" setup>
interface IBaseInputProps {
  modelValue?: string | number
  placeholder?: string
  variant?: '1'
}

interface IBaseInputEmits {
  (e: 'update:modelValue', value: string | number): void
}

const props = withDefaults(defineProps<IBaseInputProps>(), {
  modelValue: '',
  placeholder: '',
  variant: '1'
})

const emit = defineEmits<IBaseInputEmits>()

const configVariant: Record<NonNullable<IBaseInputProps['variant']>, string> = {
  1: 'w-full h-48 px-24 text-15 rounded-5 text-navy-1 border border-gray-3 bg-gray-3 duration-200 focus:border-blue-1 focus:outline-none'
}

const text = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})
</script>

<template>
  <input
    v-model="text"
    :placeholder="placeholder"
    :class="configVariant[variant]">
</template>
