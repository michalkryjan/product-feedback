<script setup lang="ts">
interface IButtonUpvoteProps {
  feedbackId: Feedback['id']
  count: number
  type?: 'vertical' | 'horizontal'
  active?: boolean
  disabled?: boolean
}

interface IButtonVoteEmits {
  (e: 'update:active', val: boolean): void
}

const props = withDefaults(defineProps<IButtonUpvoteProps>(), {
  type: 'vertical',
  active: false,
  disabled: false
})

const emit = defineEmits<IButtonVoteEmits>()

const iconClasses = computed(() => {
  return [
    'transition-colors',
    props.active ? 'text-white' : 'text-blue-1'
  ]
})

function toggle () {
  emit('update:active', !props.active)
}
</script>

<template>
  <base-button
    :label="count.toString()"
    :size="type === 'vertical' ? 's3' : 's4'"
    label-size="s1"
    :disabled="disabled"
    :theme="active ? 'blue' : 'gray'"
    :inactive="active"
    :class="active ? '[&_.label]:text-white' : '[&_.label]:text-navy-1'"
    @click="toggle">
    <template
      v-if="type === 'vertical'"
      #iconTop>
      <base-icon
        name="arrow-up"
        :class="iconClasses" />
    </template>

    <template
      v-if="type === 'horizontal'"
      #iconLeft>
      <base-icon
        name="arrow-up"
        :class="iconClasses" />
    </template>
  </base-button>
</template>