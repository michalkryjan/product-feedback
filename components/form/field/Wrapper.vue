<script setup lang="ts">
import { RuleExpression, Field as VeeField } from 'vee-validate'

interface IFormFieldWrapperProps {
  name?: string
  validationRules?: RuleExpression<unknown>
}

const props = withDefaults(defineProps<IFormFieldWrapperProps>(), {
  name: '',
  validationRules: undefined
})

const slots = useSlots()
const {
  formFieldWrapper
} = useDependencyInjectionSchema()

provide(formFieldWrapper.name, props.name)

const hasHeader = computed<boolean>(() => !!slots?.header)
const hasField = computed<boolean>(() => !!slots?.field)

const classes = computed<string[]>(() => {
  return [
    'flex flex-col flex-nowrap'
  ]
})
</script>

<template>
  <div :class="classes">
    <div v-if="hasHeader">
      <slot name="header" />
    </div>

    <vee-field
      v-if="hasField"
      v-slot="{ errors, handleChange, handleBlur}"
      :name="name"
      :rules="validationRules">
      <slot
        :id="name"
        name="field"
        :errors="errors"
        :handle-change="handleChange"
        :handle-blur="handleBlur" />

      <div v-if="errors.length">
        <form-field-error
          v-for="(error, index) in errors"
          :key="index"
          :message="error" />
      </div>
    </vee-field>
  </div>
</template>
