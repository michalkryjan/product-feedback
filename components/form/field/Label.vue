<script setup lang="ts">
interface IFormFieldLabelProps {
  tag?: 'label' | 'span'
  value: string
}

const props = withDefaults(defineProps<IFormFieldLabelProps>(), {
  tag: 'label'
})

const {
  formFieldWrapper
} = useDependencyInjectionSchema()

const fieldName = inject(formFieldWrapper.name, '')
</script>

<template>
  <component
    :is="tag"
    :for="tag === 'label' ? fieldName : undefined" />
</template>
