<script setup lang="ts">
interface ITheProductInfoProps {
  data: {
    title: string
    content: string
  }
}

const props = defineProps<ITheProductInfoProps>()
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