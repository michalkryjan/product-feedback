<script setup lang="ts">
interface ICardFeedbackProps {
  data: Feedback
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
const accentColor = computed(() => props.data.status.color)

const wrapperClasses = computed(() => {
  return [
    'feedback-card flex flex-nowrap',
    props.type === 'roadmap'
      ? 'is-roadmap flex-col gap-y-16'
      : 'flex-row gap-x-40'
  ]
})
</script>

<template>
  <base-card
    :variant="type === 'roadmap' ? '2' : '1'"
    :tag="linkToDetails ? 'NuxtLink' : 'div'"
    :to="detailsUrl">
    <div :class="wrapperClasses">
      <div :class="type === 'roadmap' ? 'flex flex-col flex-nowrap' : 'order-2 flex-1'">
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
          class="order-1 pl-24 mb-12 relative leading-100 feedback-card__status">
          <span v-html="useCapitalized(data.status.name)" />
        </base-content>

        <base-content
          typography="text-body-1"
          color="gray"
          :class="[
            'order-3',
            type === 'roadmap' ? 'mb-16' : 'mb-12'
          ]">
          <span v-html="useOrphans(data.description)" />
        </base-content>

        <base-tag
          :text="useCapitalized(data.category.name)"
          class="order-4" />
      </div>

      <div :class="type === 'roadmap' ? 'inline-flex justify-between gap-x-32' : 'contents'">
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

<style lang="postcss" scoped>
.feedback-card.is-roadmap {
  --accentColor: v-bind(accentColor);

  &::before {
    content: '';
    @apply absolute top-0 left-0 w-full h-6;
    background-color: var(--accentColor);
  }

  .feedback-card__status::before {
    content: '';
    @apply absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full;
    background-color: var(--accentColor);
  }
}
</style>