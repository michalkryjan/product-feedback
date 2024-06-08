<script setup lang="ts">
import type { IUiFeedbackProps } from '~/components/ui/Feedback.vue'

interface IUiFeedbackListDefaultProps {
  type?: IUiFeedbackProps['type']
  items: IFeedbackExtended[]
}

const props = withDefaults(defineProps<IUiFeedbackListDefaultProps>(), {
  type: 'default'
})
</script>

<template>
  <layout-grid type="1col-v2">
    <ui-feedback
      v-for="item in items"
      :key="item.id"
      :type="type"
      :data="item" />
  </layout-grid>
</template>