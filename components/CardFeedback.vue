<script setup lang="ts">
interface ICardFeedbackProps {
  data: Feedback
  type?: 'default' | 'roadmap'
}

const props = withDefaults(defineProps<ICardFeedbackProps>(), {
  type: 'default'
})

const isUpvoted = ref<boolean>(false)
const upvotesCount = ref<number>(props.data.upvotes)
</script>

<template>
  <base-card layout="row">
    <button-upvote
      v-model:active="isUpvoted"
      v-model:count="upvotesCount"
      :feedback-id="data.id"
      class="mr-40" />

    <div>
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
    </div>
  </base-card>
</template>