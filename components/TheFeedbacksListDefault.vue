<script setup lang="ts">
interface ITheFeedbacksListDefaultProps {
  items: Array<IFeedback & {
    categories: ICategory[]
    status: IStatus
  }>
}

const props = defineProps<ITheFeedbacksListDefaultProps>()
</script>

<template>
  <feedback
    v-for="item in items"
    :key="item.id"
    :data="item"
    class="mb-20 last:mb-0" />
</template>