<script setup lang="ts">
import type { Data } from 'types/data'

interface IMainMenuProductInfoProps {
  data: Data.Components.MainMenuProductInfo
}

const props = defineProps<IMainMenuProductInfoProps>()
</script>

<template>
  <base-card
    theme="gradient-1"
    class="min-h-130">
    <div class="mt-auto">
      <base-headline
        :level="1"
        typography="title-2">
        <span v-html="useOrphans(data.title)" />
      </base-headline>

      <base-content typography="text-body-2">
        <span v-html="useOrphans(data.content)" />
      </base-content>
    </div>
  </base-card>
</template>