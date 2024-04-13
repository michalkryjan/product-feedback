<script setup lang="ts">
const feedbacksStore = useFeedbacksStore()
const categoriesStore = useCategoriesStore()
const statusesStore = useStatusesStore()

async function updateData () {
  feedbacksStore.fetchFeedbacks()
  categoriesStore.fetchCategories()
  statusesStore.fetchStatuses()
}

await useAsyncData(
  'apiData',
  () => updateData()
).then(() => true)
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