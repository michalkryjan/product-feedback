<script lang="ts" setup>
interface IBaseTextareaProps {
  modelValue?: string | number
  placeholder?: string
  variant?: '1'
  hasError?: boolean
}

interface IBaseInputEmits {
  (e: 'update:modelValue', value: string | number): void
}

const props = withDefaults(defineProps<IBaseTextareaProps>(), {
  modelValue: '',
  placeholder: '',
  variant: '1'
})

const emit = defineEmits<IBaseInputEmits>()

const configVariant: Record<NonNullable<IBaseTextareaProps['variant']>, string> = {
  1: 'w-full h-96 px-24 py-16 text-15 rounded-5 text-navy-1 border border-gray-3 bg-gray-3 transition-colors duration-200 focus:border-blue-1 outline-none'
}

const classes = computed(() => {
  return [
    configVariant[props.variant],
    props.hasError ? 'border-red-1' : ''
  ]
})

const text = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value!)
})
</script>

<template>
  <textarea
    v-model="text"
    :placeholder="placeholder"
    :class="classes" />
</template>
