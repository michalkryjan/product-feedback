<script setup lang="ts">
import type { Content } from 'types/content'

const { data: globalContent } = await useAsyncData(
  'global',
  () => queryContent<Content.Global>('global').findOne()
)

const { data: pageContent } = await useAsyncData(
  'homepage',
  () => queryContent<Content.Homepage>('homepage').findOne()
)

useHead({
  title: `${pageContent.value?.title ?? globalContent.value?.title}`,
})

const feedbacksStore = useFeedbacksStore()

feedbacksStore.fetchFeedbacks()
</script>

<template>
  <div>
    <nuxt-layout name="board-with-sidebar">
      <template #sidebar>
        <card-product-info
          v-if="pageContent?.productInfo"
          :data="pageContent.productInfo" />

        <card-suggestions-filters
          v-if="pageContent?.filters"
          :data="pageContent.filters" />

        <card-roadmap-summary
          v-if="pageContent?.roadmapSummary"
          :data="pageContent.roadmapSummary" />
      </template>

      <template #board>
        <feedbacks-list-default
          v-if="!!feedbacksStore.feedbacks?.length"
          :items="feedbacksStore.feedbacks" />
        <feedbacks-not-found v-else />
      </template>
    </nuxt-layout>
  </div>
</template>