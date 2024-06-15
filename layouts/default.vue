<script setup lang="ts">
const categoriesStore = useCategoriesStore()
const statusesStore = useStatusesStore()
const feedbacksStore = useFeedbacksStore()

async function updateStoresData () {
  await Promise.all([
    categoriesStore.updateCategories(),
    statusesStore.updateStatuses(),
    feedbacksStore.updateFeedbacks()
  ])
}

await useAsyncData('stores/data', () => updateStoresData()).then(() => true)
</script>

<template>
  <Html
    lang="en"
    class="h-full">
    <Body class="m-0 h-full min-h-full min-w-320 w-full">
      <slot />
    </Body>
  </Html>
</template>

<style lang="css">
#__nuxt {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>