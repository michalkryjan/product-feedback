<script setup lang="ts">
import type { Models } from 'types/models'

export interface IUiFeedbackProps {
  data: Models.IFeedback
  type?: 'default' | 'roadmap'
  linkToDetails?: boolean
  accentColor?: number
}

const props = withDefaults(defineProps<IUiFeedbackProps>(), {
  type: 'default',
  linkToDetails: true,
  accentColor: 1
})

const isUpvoted = ref<boolean>(false)
const upvotesCount = ref<number>(props.data.upvotes_count)

const detailsUrl = computed<string | undefined>(() => props.linkToDetails ? `/feedback/${props.data.id}` : undefined)

const accentColorClass = computed<string | undefined>(() => {
  if (props.type === 'default') {
    return
  }

  return useAccentColor(props.accentColor, 'beforeBgClass')
})

const mainWrapperClasses = computed<string[]>(() => {
  const result: string[] = [
    'flex flex-nowrap'
  ]

  if (props.type === 'roadmap') {
    result.push(
      'flex-col gap-y-16 before:absolute before:top-0 before:left-0 before:w-full before:h-6',
      accentColorClass.value ? accentColorClass.value : 'before:bg-blue-2'
    )
  } else {
    result.push(
      'flex-row gap-x-40'
    )
  }

  return result
})
const textWrapperClasses = computed<string>(() => props.type === 'roadmap' ? 'flex flex-col flex-nowrap' : 'order-2 flex-1')
const groupWrapperClasses = computed<string>(() => props.type === 'roadmap' ? 'inline-flex justify-between gap-x-32' : 'contents')

const descriptionClasses = computed<string[]>(() => {
  return [
    'order-3',
    props.type === 'roadmap' ? 'mb-16' : 'mb-12'
  ]
})
const statusClasses = computed<string[]>(() => {
  const result: string[] = [
    'order-1 pl-24 mb-12 relative leading-100'
  ]

  if (props.type === 'roadmap') {
    result.push(
      'before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-8 before:rounded-full',
      accentColorClass.value ? accentColorClass.value : 'before:bg-blue-2'
    )
  }

  return result
})
const buttonUpvoteClasses = computed<string[]>(() => {
  return [
    'z-50',
    props.type === 'roadmap' ? 'order-2' : 'order-1'
  ]
})
</script>

<template>
  <ui-card :variant="type === 'roadmap' ? '2' : '1'">
    <div :class="mainWrapperClasses">
      <div :class="textWrapperClasses">
        <base-headline
          :level="type === 'roadmap' ? 2 : 3"
          typography="title-3"
          color="navy"
          class="mb-4 order-2">
          <nuxt-link
            :to="detailsUrl"
            class="transition-colors hover:text-blue-1">
            <span v-html="useOrphans(data.title)" />
          </nuxt-link>
        </base-headline>

        <base-content
          v-if="type === 'roadmap' && data.status_name"
          typography="text-body-1"
          color="gray"
          :class="statusClasses">
          <span v-html="useCapitalized(data.status_name)" />
        </base-content>

        <base-content
          v-if="data?.description"
          typography="text-body-1"
          color="gray"
          :class="descriptionClasses">
          <span v-html="useOrphans(data.description)" />
        </base-content>

        <base-tag
          v-if="data?.category_name"
          :text="useCapitalized(data.category_name)"
          class="order-4" />
      </div>

      <div :class="groupWrapperClasses">
        <ui-button-upvote
          v-model:active="isUpvoted"
          v-model:count="upvotesCount"
          :feedback-id="data.id"
          :type="type === 'roadmap' ? 'horizontal' : 'vertical'"
          :class="buttonUpvoteClasses" />

        <div
          v-if="data?.comments_count"
          class="inline-flex gap-x-8 my-auto order-3">
          <base-icon name="comments" />
          <base-content
            typography="text-label-4"
            color="navy">
            {{ data.comments_count }}
          </base-content>
        </div>
      </div>
    </div>
  </ui-card>
</template>