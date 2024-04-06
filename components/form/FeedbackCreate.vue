<script setup lang="ts">
import type { IFormTemplateCardField } from 'components/form/TemplateCard.vue'
import { useForm } from 'vee-validate'

interface IFormFeedbackCreateEmits {
  (e: 'success'): void
}

const emit = defineEmits<IFormFeedbackCreateEmits>()

export interface IFormFeedbackCreateValues extends Pick<Feedback, 'title' | 'category' | 'description'> {}

const submitDisabled = ref<boolean>(false)

const {
  handleSubmit,
  values
} = useForm<IFormFeedbackCreateValues>({
  validationSchema: {
    title: '',
    category: '',
    description: ''
  },
  initialValues: {
    title: undefined,
    category: undefined,
    description: undefined
  }
})

const configFields: IFormTemplateCardField = [
  {
    id: 'title',
    title: 'Feedback Title',
    label: 'Add a short, descriptive headline'
  },
  {
    id: 'category',
    title: 'Category',
    label: 'Choose a category for your feedback'
  },
  {
    id: 'description',
    title: 'Feedback Detail',
    label: 'Include any specific comments on what should be improved, added, etc.'
  }
]

const onFormSubmit = handleSubmit(async (values: IFormFeedbackCreateValues) => {
  await postFormData(values)
})

async function postFormData (values: IFormFeedbackCreateValues) {
  submitDisabled.value = true

  try {
    // API call
    console.log(values)
    emit('success')
  } catch (e) {
    console.log(e)
  }

  submitDisabled.value = false
}

watch(values, () => {
  console.log(values)
})
</script>

<template>
  <form-template-card
    title="Create New Feedback"
    icon="new-feedback"
    :fields="configFields"
    :on-submit="onFormSubmit">
    <template #field--title="{ id, errors, handleChange }">
      <base-input
        :id="id"
        :has-error="errors.length > 0"
        @update:model-value="handleChange" />
    </template>

    <template #field--category="{ id, errors, handleChange }">
      <base-input
        :id="id"
        :has-error="errors.length > 0"
        @update:model-value="handleChange" />
    </template>

    <template #field--description="{ id, errors, handleChange }">
      <base-textarea
        :id="id"
        :has-error="errors.length > 0"
        @update:model-value="handleChange" />
    </template>

    <template #footer>
      <div class="inline-flex gap-x-16 justify-end w-full">
        <base-button
          size="s2"
          theme="navy"
          label="Cancel"
          is-one-line
          href="/" />

        <base-button
          type="submit"
          size="s2"
          theme="purple"
          label="Add Feedback"
          is-one-line />
      </div>
    </template>
  </form-template-card>
</template>