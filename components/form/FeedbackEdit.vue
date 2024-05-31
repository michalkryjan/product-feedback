<script setup lang="ts">
import { useForm } from 'vee-validate'
import type { IFormTemplateCardField } from '~/components/form/TemplateCard.vue'

interface IFormFeedbackEditProps {
  feedback: IFeedbackExtended
}

export interface IFormFeedbackEditValues extends Pick<IFeedbackExtended, 'title' | 'categories' | 'description' | 'status'> {}

interface IFormFeedbackEditEmits {
  (e: 'success'): void
}

const props = defineProps<IFormFeedbackEditProps>()
const emit = defineEmits<IFormFeedbackEditEmits>()

const categoriesStore = useCategoriesStore()

const submitDisabled = ref<boolean>(false)

const {
  handleSubmit,
  values
} = useForm<IFormFeedbackEditValues>({
  validationSchema: {
    title: '',
    categories: '',
    status: '',
    description: ''
  },
  initialValues: {
    title: props.feedback?.title,
    categories: props.feedback?.categories,
    status: props.feedback?.status,
    description: props.feedback?.description
  }
})

const configFields: IFormTemplateCardField[] = [
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
    id: 'description',
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
    :title="`Editing '${ feedback?.title }'`"
    icon="edit-feedback"
    :fields="configFields"
    :on-submit="onFormSubmit">
    <template #field--title="{ id, errors, handleChange }">
      <base-input
        :id="id"
        :has-error="errors.length > 0"
        @update:model-value="handleChange" />
    </template>

    <template #field--category="{ id, errors, handleChange }">
      <dropdown-select-form
        :id="id"
        :options="categoriesStore.categories"
        :has-error="errors.length > 0"
        aria-label-opened="Hide available categories"
        aria-label-closed="Show available categories"
        @update-value="handleChange" />
    </template>

    <template #field--status="{ id, errors, handleChange }">
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
          text="Delete"
          href="/"
          size="s2"
          theme="red"
          label-color="white"
          class="mr-auto" />

        <base-button
          text="Cancel"
          href="/"
          size="s2"
          theme="navy"
          label-color="white" />

        <base-button
          type="submit"
          text="Save Feedback"
          size="s2"
          theme="purple"
          label-color="white" />
      </div>
    </template>
  </form-template-card>
</template>