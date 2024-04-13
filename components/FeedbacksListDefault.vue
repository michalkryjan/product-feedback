<script setup lang="ts">
interface IFeedbacksListDefaultProps {
  items: Feedback[]
}

const props = defineProps<IFeedbacksListDefaultProps>()
</script>

<template>
  <card-feedback
    v-for="item in items"
    :key="item.id"
    :data="item"
    class="mb-20 last:mb-0" />
</template>