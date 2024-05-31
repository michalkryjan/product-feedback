<script setup lang="ts">
export interface IBaseDropdownProps {
  ariaLabelOpened?: string
  ariaLabelClosed?: string
}

const props = defineProps<IBaseDropdownProps>()

const triggerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const isOpened = ref(false)

const ariaLabel = computed(() => isOpened.value ? props.ariaLabelOpened : props.ariaLabelClosed)

function toggle () {
  if (isOpened.value) {
    close()
  } else {
    open()
  }
}

function open () {
  isOpened.value = true
}

function close () {
  isOpened.value = false
}


onMounted(() => {
  onClickOutside(contentRef, () => {
    close()
  }, {
    ignore: [triggerRef]
  })
})

defineExpose({
  isOpened,
  open,
  close
})
</script>

<template>
  <div class="relative flex overflow-visible">
    <button
      ref="triggerRef"
      role="button"
      :aria-label="ariaLabel"
      aria-haspopup="listbox"
      :aria-expanded="isOpened"
      class="w-full outline-none"
      @click="toggle">
      <slot name="trigger" />
    </button>


    <transition name="fade-in">
      <div
        v-show="isOpened"
        ref="contentRef"
        role="listbox"
        class="absolute left-0 top-[calc(100%+4rem)] z-50"
        autofocus>
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>