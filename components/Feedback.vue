<script setup lang="ts">
interface ICardFeedbackProps {
  data: IFeedback & {
    categories: ICategory[]
    status: IStatus
  }
  type?: 'default' | 'roadmap'
  linkToDetails?: boolean
}

const props = withDefaults(defineProps<ICardFeedbackProps>(), {
  type: 'default',
  linkToDetails: true
})

const isUpvoted = ref<boolean>(false)
const upvotesCount = ref<number>(props.data.upvotes)

const detailsUrl = computed(() => props.linkToDetails ? `/feedback/${props.data.id}` : undefined)
const accentColor = computed(() => props.type === 'roadmap' ? useAccentColor(props.data.status.order, 'bgClass') : undefined)

const mainWrapperClasses = computed(() => {
  return [
    'flex flex-nowrap',
    props.type === 'roadmap'
      ? 'flex-col gap-y-16 before:absolute before:top-0 before:left-0 before:w-full before:h-6 ' + ('before:' + accentColor.value)
      : 'flex-row gap-x-40'
  ]
})
const textWrapperClasses = computed(() => props.type === 'roadmap' ? 'flex flex-col flex-nowrap' : 'order-2 flex-1')
const groupWrapperClasses = computed(() => props.type === 'roadmap' ? 'inline-flex justify-between gap-x-32' : 'contents')

const descriptionClasses = computed(() => {
  return [
    'order-3',
    props.type === 'roadmap' ? 'mb-16' : 'mb-12'
  ]
})

const statusClasses = computed(() => {
  return [
    'order-1 pl-24 mb-12 relative leading-100',
    props.type === 'roadmap'
      ? 'before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-8 before:rounded-full ' + ('before:' + accentColor.value)
      : ''
  ]
})
</script>

<template>
  <base-card
    :variant="type === 'roadmap' ? '2' : '1'"
    :tag="linkToDetails ? 'NuxtLink' : 'div'"
    :to="detailsUrl">
    <div :class="mainWrapperClasses">
      <div :class="textWrapperClasses">
        <base-headline
          :level="type === 'roadmap' ? 2 : 3"
          typography="title-3"
          color="navy"
          class="mb-4 order-2">
          <span v-html="useOrphans(data.title)" />
        </base-headline>

        <base-content
          v-if="type === 'roadmap'"
          typography="text-body-1"
          color="gray"
          :class="statusClasses">
          <span v-html="useCapitalized(data.status?.name)" />
        </base-content>

        <base-content
          typography="text-body-1"
          color="gray"
          :class="descriptionClasses">
          <span v-html="useOrphans(data.description)" />
        </base-content>

        <base-tag
          v-for="category in data.categories"
          :key="category.id"
          :text="useCapitalized(category.name)"
          class="order-4" />
      </div>

      <div :class="groupWrapperClasses">
        <button-upvote
          v-model:active="isUpvoted"
          v-model:count="upvotesCount"
          :feedback-id="data.id"
          :type="type === 'roadmap' ? 'horizontal' : 'vertical'"
          :class="type === 'roadmap' ? 'order-2' : 'order-1'" />

        <div class="inline-flex gap-x-8 my-auto order-3">
          <base-icon name="comments" />
          <base-content
            typography="text-label-4"
            color="navy">
            {{ (data?.comments ?? []).length }}
          </base-content>
        </div>
      </div>
    </div>
  </base-card>
</template>