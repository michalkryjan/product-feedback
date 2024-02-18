<script setup lang="ts">
import { RuleExpression, Field as VeeField } from 'vee-validate'

interface IFormFieldWrapperProps {
  name?: string
  validationRules?: RuleExpression<unknown>
  showErrors?: boolean
  customErrorMessages?: string[]
  isRequired?: boolean
}

const props = withDefaults(defineProps<IFormFieldWrapperProps>(), {
  name: '',
  validationRules: undefined,
  showErrors: true,
  customErrorMessages: () => [],
  isRequired: false
})

const slots = useSlots()
const { formFieldWrapper } = useDependencyInjectionSchema()

provide(formFieldWrapper.isRequired, props.isRequired)
provide(formFieldWrapper.name, props.name)

const hasHeader = computed<boolean>(() => !!slots?.header)
const hasField = computed<boolean>(() => !!slots?.field)

const classes = computed(() => {
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
      v-slot="{ field, errors, handleChange, handleBlur }"
      :name="name"
      :rules="validationRules">
      <slot
        name="field"
        :field="field"
        :errors="errors"
        :handle-change="handleChange"
        :handle-blur="handleBlur" />

      <div v-if="(errors.length && showErrors) || (customErrorMessages.length && showErrors)">
        <form-field-error
          v-for="(error, index) in [...errors, ...customErrorMessages]"
          :key="index"
          :message="error" />
      </div>
    </vee-field>
  </div>
</template>
