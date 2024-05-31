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

const feedbacksStore = useFeedbacksStore()

useHead({
  title: `${pageContent.value?.title ?? globalContent.value?.title}`,
})
</script>

<template>
  <layout-page-inner
    width-type="l"
    vertical-padding-type="m">
    <div class="grid grid-cols-[26rem_1fr] w-full gap-x-30">
      <div class="col-start-1 col-end-1 flex flex-col gap-24">
        <the-product-info
          v-if="pageContent?.productInfo"
          :data="pageContent.productInfo" />

        <the-category-filters />

        <the-roadmap-summary
          v-if="pageContent?.roadmapSummary"
          :data="pageContent.roadmapSummary" />
      </div>

      <div class="col-start-2 col-end-2 h-fit flex flex-col">
        <the-feedbacks-list-default v-if="feedbacksStore.feedbacksCount > 0" />
        <the-feedbacks-not-found v-else />
      </div>
    </div>
  </layout-page-inner>
</template>