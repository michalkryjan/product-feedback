<script setup lang="ts">
interface ICardFeedbackListProps {
  items: Feedback[]
}

const props = defineProps<ICardFeedbackListProps>()
</script>

<template>
  <card-feedback
    v-for="item in items"
    :key="item.id"
    :data="item"
    class="mb-20 last:mb-0" />
</template>