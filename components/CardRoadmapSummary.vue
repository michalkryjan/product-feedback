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
        color="navy"
        :value="data.title" />

      <base-button
        :label="data.button.label"
        :href="data.button.href"
        size="fit"
        label-size="s2"
        theme="text-blue" />
    </div>

    <list-summary :items="data.items" />
  </base-card>
</template>