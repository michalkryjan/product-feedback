<script setup lang="ts">
import type { Content } from 'types/content'

const { data: globalContent } = await useAsyncData('global',
  () => queryContent<Content.Global>('global').findOne()
)
const { data: pageContent } = await useAsyncData('homepage',
  () => queryContent<Content.Homepage>('homepage').findOne()
)

useHead({ title: `${pageContent.value?.title ?? globalContent.value?.title}`, })
</script>

<template>
  <nuxt-layout name="board-with-sidebar">
    <template #sidebar>
      <main-menu-product-info
        v-if="pageContent?.productInfo"
        :data="pageContent.productInfo" />

      <main-menu-suggestions-filters
        v-if="pageContent?.filters"
        :data="pageContent.filters" />

      <main-menu-roadmap-summary
        v-if="pageContent?.roadmapSummary"
        :data="pageContent.roadmapSummary" />
    </template>
  </nuxt-layout>
</template>