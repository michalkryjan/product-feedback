<script setup lang="ts">
import type { IBaseFormProps } from '~/components/base/Form.vue'
import type { BaseIconName } from '~/components/base/Icon.vue'

export interface IFormTemplateCardField {
  id: string
  title?: string
  label?: string
}

interface IFormTemplateCardProps {
  title: string
  icon: BaseIconName
  fields: IFormTemplateCardField[]
  onSubmit: IBaseFormProps['onSubmit']
}

const props = defineProps<IFormTemplateCardProps>()
</script>

<template>
  <ui-card
    class="pt-52"
    overflow="visible">
    <base-icon
      :name="icon"
      class="absolute top-0 -translate-y-1/2 w-56 h-56" />
    <base-header variant="1">
      <base-headline
        :level="1"
        typography="title-1"
        color="navy">
        <span v-html="useOrphans(title)" />
      </base-headline>
    </base-header>

    <base-form :on-submit="onSubmit">
      <template #main>
        <form-field-wrapper
          v-for="item in fields"
          :key="item.id"
          :name="item.id">
          <template
            v-if="item?.title || item?.label"
            #header>
            <base-headline
              v-if="item?.title"
              :level="2"
              typography="title-4"
              color="navy"
              class="mb-6">
              <span v-html="useOrphans(item.title)" />
            </base-headline>
            <base-label
              v-if="item?.label"
              :text="item.label"
              :field-id="item.id"
              class="mb-16" />
          </template>

          <template #field="{ id, errors, handleChange }">
            <slot
              :id="id"
              :errors="errors"
              :name="'field--' + item.id"
              :handle-change="handleChange" />
          </template>
        </form-field-wrapper>
      </template>

      <template #footer>
        <slot name="footer" />
      </template>
    </base-form>
  </ui-card>
</template>