<script setup lang="ts">
import type { Data } from 'types/data'

interface IMainMenuRoadmapSummaryProps {
  data: Data.Components.MainMenuRoadmapSummary
}

const props = defineProps<IMainMenuRoadmapSummaryProps>()
</script>

<template>
  <base-card>
    <div class="mb-24 w-full inline-flex items-center justify-between">
      <base-headline
        :level="2"
        typography="title-3"
        color="navy">
        <span v-html="useOrphans(data.title)" />
      </base-headline>

      <base-button
        :text="data.button.label"
        :href="data.button.href"
        label-size="s2"
        theme="transparent"
        label-color="blue"
        is-underline />
    </div>

    <list-summary :items="data.items" />
  </base-card>
</template>