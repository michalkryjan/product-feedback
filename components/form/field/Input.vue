<script setup lang="ts">
interface IFormFieldInputProps {
  value?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
  placeholder?: string
}

interface IFormFieldInputEmits {
  (e: 'change', value: string | undefined): void
}

const props = withDefaults(defineProps<IFormFieldInputProps>(), {
  value: undefined,
  type: 'text',
  placeholder: undefined
})

const emit = defineEmits<IFormFieldInputEmits>()

defineOptions({
  inheritAttrs: false
})

const {
  formFieldWrapper
} = useDependencyInjectionSchema()

const fieldName = inject(formFieldWrapper.name, '')

const isPlaceholderOnTop = ref(false)

const valueModel = computed<string | undefined>({
  get: () => props.value,
  set: (val: string | undefined) => emit('change', val)
})

function handleFocus () {
  isPlaceholderOnTop.value = true
}

function handleBlur () {
  if (!valueModel.value) {
    isPlaceholderOnTop.value = false
  }
}
</script>

<template>
  <label class="relative">
    <base-content
      v-if="placeholder"
      :value="placeholder"
      tag="span"
      is-one-line
      class="bg-white transition-topWithFontSize pointer-events-none absolute left-8 top-1/2 select-none px-8 duration-200 -translate-y-1/2"
      :class="{
        '!top-0 !text-14': isPlaceholderOnTop
      }" />

    <base-input
      v-bind="$attrs"
      :id="fieldName"
      v-model="valueModel"
      :type="type"
      @focus="handleFocus"
      @blur="handleBlur" />
  </label>
</template>
