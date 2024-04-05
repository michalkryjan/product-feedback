<script setup lang="ts">
import type { IFormTemplateCardField } from 'components/form/TemplateCard.vue'
import { useForm } from 'vee-validate'

interface IFormFeedbackEditProps {
  data: Feedback
}

interface IFormFeedbackEditEmits {
  (e: 'success'): void
}

const props = defineProps<IFormFeedbackEditProps>()
const emit = defineEmits<IFormFeedbackEditEmits>()

export interface IFormFeedbackEditValues {
  title: string
  category: string
  status: string
  details: string
}

const submitDisabled = ref<boolean>(false)

const {
  handleSubmit,
  values
} = useForm<IFormFeedbackEditValues>({
  validationSchema: {
    title: '',
    category: '',
    status: '',
    details: ''
  },
  initialValues: {
    title: props.data.title,
    category: props.data.category,
    status: props.data.status,
    details: props.data.details
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
    id: 'status',
    title: 'Update Status',
    label: 'Change Feedback state'
  },
  {
    id: 'details',
    title: 'Feedback Detail',
    label: 'Include any specific comments on what should be improved, added, etc.'
  }
]

const onFormSubmit = handleSubmit(async (values: IFormFeedbackEditValues) => {
  await postFormData(values)
})

async function postFormData (values: IFormFeedbackEditValues) {
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
    :title="`Editing '${ data.title }'`"
    icon-name="edit-feedback"
    :fields="configFields"
    :on-submit="onFormSubmit">
    <template #field--title="{ field, handleChange }">
      <base-input
        v-bind="field"
        @update:model-value="handleChange" />
    </template>

    <template #field--category="{ field, handleChange }">
      <base-input
        v-bind="field"
        @update:model-value="handleChange" />
    </template>

    <template #field--status="{ field, handleChange }">
      <base-input
        v-bind="field"
        @update:model-value="handleChange" />
    </template>

    <template #field--details="{ field, handleChange }">
      <base-input
        v-bind="field"
        @update:model-value="handleChange" />
    </template>

    <template #footer>
      <div class="inline-flex gap-x-16 justify-end w-full">
        <base-button
          size="s2"
          theme="red"
          label="Delete"
          is-one-line
          class="mr-auto"
          href="/" />

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