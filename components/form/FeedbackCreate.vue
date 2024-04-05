<script setup lang="ts">
import { useForm } from 'vee-validate'

interface IFormFeedbackCreateEmits {
  (e: 'success'): void
}

const emit = defineEmits<IFormFeedbackCreateEmits>()

export interface IFormFeedbackCreateValues {
  title: string
  category: string
  description: string
}

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
  <base-card>
    <base-header variant="1">
      <base-headline
        :level="1"
        typography="title-1"
        color="navy"
        class="mb-2">
        <span v-html="useOrphans('Create New Feedback')" />
      </base-headline>
    </base-header>

    <form-wrapper :on-submit="onFormSubmit">
      <template #main>
        <form-field-wrapper name="title">
          <template #header>
            <base-headline
              :level="2"
              typography="title-4"
              color="navy"
              class="mb-2">
              <span v-html="useOrphans('Feedback Title')" />
            </base-headline>
            <base-content
              typography="text-label-3"
              color="gray"
              class="mb-16">
              <span v-html="useOrphans('Add a short, descriptive headline')" />
            </base-content>
          </template>
          <template #field="{ field, handleChange }">
            <base-input
              v-bind="field"
              @update:model-value="handleChange" />
          </template>
        </form-field-wrapper>

        <form-field-wrapper name="category">
          <template #header>
            <base-headline
              :level="2"
              typography="title-4"
              color="navy"
              class="mb-2">
              <span v-html="useOrphans('Category')" />
            </base-headline>
            <base-content
              typography="text-label-3"
              color="gray"
              class="mb-16">
              <span v-html="useOrphans('Choose a category for your feedback')" />
            </base-content>
          </template>
          <template #field="{ field, handleChange }">
            <base-input
              v-bind="field"
              @update:model-value="handleChange" />
          </template>
        </form-field-wrapper>

        <form-field-wrapper name="description">
          <template #header>
            <base-headline
              :level="2"
              typography="title-4"
              color="navy"
              class="mb-2">
              <span v-html="useOrphans('Feedback Detail')" />
            </base-headline>
            <base-content
              typography="text-label-3"
              color="gray"
              class="mb-16">
              <span v-html="useOrphans('Include any specific comments on what should be improved, added, etc.')" />
            </base-content>
          </template>
          <template #field="{ field, handleChange }">
            <base-input
              v-bind="field"
              @update:model-value="handleChange" />
          </template>
        </form-field-wrapper>
      </template>

      <template #footer>
        <div class="inline-flex gap-x-16 justify-end w-full">
          <base-button
            size="s2"
            theme="navy"
            label="Cancel" />

          <base-button
            type="submit"
            size="s2"
            theme="purple"
            label="Add Feedback" />
        </div>
      </template>
    </form-wrapper>
  </base-card>
</template>