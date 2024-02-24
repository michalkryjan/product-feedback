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
    class="min-h-[13.7rem]">
    <div class="mt-auto">
      <base-headline
        typography="title-2"
        :value="data.title" />
      <base-text
        typography="body-2"
        :value="data.content" />
    </div>
  </base-card>
</template>