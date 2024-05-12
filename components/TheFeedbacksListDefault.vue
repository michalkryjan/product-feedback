<script setup lang="ts">
interface ITheFeedbacksListDefaultProps {
  items: Array<Omit<IFeedback, 'categories' | 'status'> & {
    categories: ICategory[]
    status: IStatus
  }>
}

const props = defineProps<ITheFeedbacksListDefaultProps>()

const { categoriesFilter } = storeToRefs(useCategoriesStore())

const filteredItems = computed(() => {
  return props.items.filter(feedback => {
    if (!categoriesFilter.value) {
      return true
    }

    return feedback.categories.some(cat => cat.id === categoriesFilter.value)
  })
})
</script>

<template>
  <feedback
    v-for="item in filteredItems"
    :key="item.id"
    :data="item"
    class="mb-20 last:mb-0" />
</template>