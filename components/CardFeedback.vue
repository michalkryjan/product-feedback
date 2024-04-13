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
</script>

<template>
  <base-card
    :tag="linkToDetails ? 'NuxtLink' : 'div'"
    :to="detailsUrl">
    <div class="flex flex-row flex-nowrap gap-x-40">
      <button-upvote
        v-model:active="isUpvoted"
        v-model:count="upvotesCount"
        :feedback-id="data.id" />

      <div class="flex-1">
        <base-headline
          :level="type === 'roadmap' ? 1 : 3"
          typography="title-3"
          color="navy"
          class="mb-4">
          <span v-html="useOrphans(data.title)" />
        </base-headline>

        <base-content
          typography="text-body-1"
          color="gray"
          class="mb-12">
          <span v-html="useOrphans(data.description)" />
        </base-content>

        <base-tag :text="data.category.name[0].toUpperCase() + data.category.name.slice(1)" />
      </div>

      <div class="inline-flex gap-x-8 my-auto">
        <base-icon name="comments" />
        <base-content
          typography="text-label-4"
          color="navy">
          {{ (data?.comments ?? []).length }}
        </base-content>
      </div>
    </div>
  </base-card>
</template>