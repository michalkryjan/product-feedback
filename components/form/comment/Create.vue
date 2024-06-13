<script setup lang="ts">
import type { Models } from 'types/models'
import { useForm } from 'vee-validate'

interface IFormCommentCreateValues extends Pick<Models.IComment, 'content'> {}

interface IFormCommentCreateEmits {
  (e: 'success'): void
}

const emit = defineEmits<IFormCommentCreateEmits>()

const {
  handleSubmit,
  values
} = useForm<IFormCommentCreateValues>({
  validationSchema: {
    content: ''
  },
  initialValues: {
    content: ''
  }
})

const onFormSubmit = handleSubmit(async (values: IFormCommentCreateValues) => {
  await postFormData(values)
})

const { charsLeft } = useCharsCounter({
  watch: computed<string>(() => values.content),
  limit: 250
})

const submitDisabled = ref<boolean>(false)

async function postFormData (values: IFormCommentCreateValues) {
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
</script>

<template>
  <base-form
    gap-size="s2"
    :on-submit="onFormSubmit">
    <template #main>
      <form-field-wrapper name="content">
        <template #field="{ id, handleChange }">
          <base-textarea
            :id="id"
            @update:model-value="handleChange" />
        </template>
      </form-field-wrapper>
    </template>

    <template #footer>
      <div class="inline-flex justify-between items-center gap-x-32 w-full">
        <base-content
          typography="text-body-2"
          color="gray">
          {{ charsLeft + ' characters left' }}
        </base-content>
        <base-button
          text="Post comment"
          size="s2"
          theme="purple"
          label-color="white" />
      </div>
    </template>
  </base-form>
</template>