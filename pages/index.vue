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

const { feedbacks } = storeToRefs(useFeedbacksStore())

useHead({
  title: `${pageContent.value?.title ?? globalContent.value?.title}`,
})
</script>

<template>
  <layout-page-wrapper width-type="l">
    <div class="grid grid-cols-[26rem_1fr] w-full gap-x-30 pt-90">
      <div class="col-start-1 col-end-1 flex flex-col gap-24">
        <card-product-info
          v-if="pageContent?.productInfo"
          :data="pageContent.productInfo" />

        <card-suggestions-filters
          v-if="pageContent?.filters"
          :data="pageContent.filters" />

        <card-roadmap-summary
          v-if="pageContent?.roadmapSummary"
          :data="pageContent.roadmapSummary" />
      </div>

      <div class="col-start-2 col-end-2 h-fit flex flex-col">
        <feedbacks-list-default
          v-if="!!feedbacks?.length"
          :items="feedbacks" />
        <feedbacks-not-found v-else />
      </div>
    </div>
  </layout-page-wrapper>
</template>