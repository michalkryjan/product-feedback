<script setup lang="ts">
interface IUiProductInfoProps {
  title: string
  subtitle: string
}

const props = defineProps<IUiProductInfoProps>()
</script>

<template>
  <ui-card
    theme="gradient-1"
    class="min-h-130">
    <div class="mt-auto">
      <base-headline
        :level="1"
        typography="title-2">
        {{ title }}
      </base-headline>

      <base-content typography="text-body-2">
        {{ subtitle }}
      </base-content>
    </div>
  </ui-card>
</template>