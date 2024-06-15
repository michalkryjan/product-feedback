<script setup lang="ts">
interface IUiHeaderSubpageProps {
  tag?: 'header' | 'div'
  type?: 'simple' | 'card'
  marginBottomType?: 's' | 'm' | 'l'
  pageTitle?: string
}

const props = withDefaults(defineProps<IUiHeaderSubpageProps>(), {
  tag: 'div',
  type: 'simple',
  marginBottomType: 's',
  pageTitle: undefined
})

const configMarginBottomType: Record<NonNullable<IUiHeaderSubpageProps['marginBottomType']>, string> = {
  s: 'mb-24',
  m: 'mb-48',
  l: 'mb-68'
}

const wrapperClasses = computed(() => {
  return [
    'inline-flex justify-between items-center w-full',
    props.type === 'card' ? 'pl-32 pr-40 py-26 rounded-primary bg-darkNavy' : '',
    configMarginBottomType[props.marginBottomType],
  ]
})

const backButtonIconClasses = computed(() => {
  return [
    'mr-8',
    props.type === 'simple' ? 'text-blue-1' : 'text-gray-6'
  ]
})
</script>

<template>
  <component
    :is="tag"
    :class="wrapperClasses">
    <div class="flex flex-col-reverse flex-nowrap gap-8">
      <base-headline
        v-if="pageTitle"
        :level="1"
        typography="title-1"
        color="white">
        {{ pageTitle }}
      </base-headline>

      <base-button
        text="Go back"
        size="fit"
        theme="transparent"
        :label-color="type === 'simple' ? 'gray' : 'white'"
        @click="$router.back()">
        <template #icon-left>
          <base-icon
            name="arrow-left"
            :class="backButtonIconClasses" />
        </template>
      </base-button>
    </div>

    <slot name="button" />
  </component>
</template>