<script setup lang="ts">
interface IButtonUpvoteProps {
  feedbackId: Feedback['id']
  count: number
  type?: 'vertical' | 'horizontal'
  active?: boolean
  disabled?: boolean
}

interface IButtonUpvoteEmits {
  (e: 'update:active', val: boolean): void
  (e: 'update:count', val: number): void
}

const props = withDefaults(defineProps<IButtonUpvoteProps>(), {
  type: 'vertical',
  active: false,
  disabled: false
})

const emit = defineEmits<IButtonUpvoteEmits>()

const iconClasses = computed(() => {
  return [
    'transition-colors',
    props.active ? 'text-white' : 'text-blue-1'
  ]
})

function toggle () {
  emit('update:count', props.active ? props.count - 1 : props.count + 1)
  emit('update:active', !props.active)
}
</script>

<template>
  <base-button
    :text="count.toString()"
    :size="type === 'vertical' ? 's3' : 's4'"
    label-size="s1"
    :theme="active ? 'blue' : 'gray'"
    :label-color="active ? 'white' : 'navy'"
    :is-disabled="disabled"
    :is-inactive="active"
    class="min-w-42"
    @click="toggle">
    <template
      v-if="type === 'vertical'"
      #icon-top>
      <base-icon
        name="arrow-up"
        :class="iconClasses" />
    </template>

    <template
      v-if="type === 'horizontal'"
      #icon-left>
      <base-icon
        name="arrow-up"
        :class="iconClasses" />
    </template>
  </base-button>
</template>