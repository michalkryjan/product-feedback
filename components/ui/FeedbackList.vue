<script setup lang="ts">
import type { Models } from 'types/models'
import type { IUiFeedbackProps } from '~/components/ui/Feedback.vue'

interface IUiFeedbackListDefaultProps {
  type?: IUiFeedbackProps['type']
  items: Models.IFeedback[]
}

const props = withDefaults(defineProps<IUiFeedbackListDefaultProps>(), {
  type: 'default'
})
</script>

<template>
  <layout-grid type="1col-v2">
    <ui-feedback
      v-for="(item, index) in items"
      :key="item.id"
      :type="type"
      :data="item"
      :accent-color="index + 2" />
  </layout-grid>
</template>