<script setup lang="ts">
interface IFormLabelProps {
  tag?: 'label' | 'span'
  value: string
}

const props = withDefaults(defineProps<IFormLabelProps>(), {
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
