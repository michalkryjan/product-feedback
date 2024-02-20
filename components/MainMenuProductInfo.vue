<script setup lang="ts">
import type { Data } from 'types/data'

interface IMainMenuProductInfoProps {
  data: Data.Components.MainMenuProductInfo
}

const props = defineProps<IMainMenuProductInfoProps>()
</script>

<template>
  <div class="w-full bg-[url(/suggestions/background-header-mobile.png)] bg-cover bg-no-repeat p-[2.4rem] rounded-primary mob:bg-[url(/suggestions/background-header-tablet.png)] tm:bg-[url(/suggestions/background-header-desktop.png)]">
    <base-headline :value="data.title" />
    <base-text :value="data.content" />
  </div>
</template>